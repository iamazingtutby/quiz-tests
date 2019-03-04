import React from 'react';
import classes from './Drawer.module.scss'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

export default class Drawer extends React.Component {

    onClickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links){
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.onClickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];
        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        const links = [
					{to: '/', label: 'Список  тестов', exact: true}
				]

      if(this.props.isAuthentikated){
          links.push({to: '/quiz-creator', label: 'Создать тест', exact: false})
          links.push({to: '/logout', label: 'Выйти', exact: false})
      } else {
          links.push({to: '/auth', label: 'Авторизация', exact: false})
      }

        return (
            <React.Fragment>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}

                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
            </React.Fragment>

        );
    }

}
