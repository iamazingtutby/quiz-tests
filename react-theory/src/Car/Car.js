import React, {Component} from 'react';
import classes from './Car.module.scss';
import withClass from '../hoc/withClass';

import propTypes from 'prop-types'

class Car extends Component {

    constructor (props){
        super (props);

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        if(this.props.index === 1){
            this.inputRef.current.focus();
        }
    }

    render (){
        const divClassName = [classes.input];

        if(this.props.name === ''){
            divClassName.push(classes.red)
        } else {
            divClassName.push(classes.green)
        }

        if(this.props.name.length > 4){
            divClassName.push(classes.bold)
        }

        return(
            <React.Fragment>
                <h3>Name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input
                    // ref = {(inputRef) => this.inputRef = inputRef}
                    ref = {this.inputRef}
                    type="text"
                    onChange={this.props.onChangeTitleName}
                    value={this.props.name}
                    className={divClassName.join(' ')}
                />
                <button onClick={this.props.onDeleteCar}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    year: propTypes.number,
    name: propTypes.string,
    index: propTypes.number,
    onChangeTitleName: propTypes.func,
    onDeleteCar: propTypes.func
}

export default withClass(Car, classes.Car);