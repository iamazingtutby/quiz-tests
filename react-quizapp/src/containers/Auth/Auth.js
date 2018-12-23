import React from 'react'
import classes from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'

export default class Auth extends React.Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
        	<div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                        type="success"
                        onClick={this.loginHandler}
                        >
                            Login
                        </Button>

                        <Button
                        type="primary"
                        onClick={this.registerHandler}
                        >
                            Registration
                        </Button>
                    </form>
                </div>
        	</div>
        );
    }
}
