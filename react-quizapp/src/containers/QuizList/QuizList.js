import React from 'react';
import classes from './QuizList.module.scss'
import {NavLink} from 'react-router-dom'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'

export default class QuizList extends React.Component {

    state = {
        quizes: [],
        loading: true
    }

    quizRender = () => {
        return this.state.quizes.map((quiz) => {
            return (
                <li key={quiz.id}>
                    <NavLink
                        to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try{
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Test ${index + 1}`
                })
            })

            this.setState({
                quizes: quizes,
                loading: false
            })

            console.log(this.state.quizes)

        } catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
        	<div className={classes.QuizList}>
                <div>
                    <h1>
                        Список тестов
                    </h1>
                    <ul>
                        { this.state.loading ? <Loader /> : this.quizRender() }
                    </ul>
                </div>
        	</div>
        );
    }
}
