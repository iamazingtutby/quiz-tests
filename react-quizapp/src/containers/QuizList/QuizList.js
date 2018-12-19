import React from 'react';
import classes from './QuizList.module.scss'
import {NavLink} from 'react-router-dom'

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
