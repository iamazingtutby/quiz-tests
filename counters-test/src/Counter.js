import React from 'react'
import {connect} from 'react-redux'
import {add2} from './redux/actions/actions'

class Counter extends React.Component{
    render(){

        return(
            <div style={{padding: '50px'}}>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <button onClick={() => this.props.Add2(50)}>Add 50</button>
                <button onClick={() => this.props.Add2(-50)}>Sub 50</button>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return{
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return{
        Add2: (number) => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);