import React from 'react';
import classes from './QuizList.module.scss'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

export default class QuizList extends React.Component {

    quizRender = () => {
        return [1,2,3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={'/quiz/' + quiz}>
                        Тест номер {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quizapp-e37ee.firebaseio.com/quiz.json').then(response => {
            console.log('resp', response)
        })
    }

    render() {
        return (
        	<div className={classes.QuizList}>
                <div>
                    <h1>
                        Список тестов
                    </h1>
                    <ul>
                        {this.quizRender()}
                    </ul>
                </div>
        	</div>
        );
    }
}
