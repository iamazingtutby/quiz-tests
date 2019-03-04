import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import Counter from './Counter'
import {add, sub, add_number, asyncAdd} from './redux/actions/actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <h1>Counter {this.props.counter}</h1>
        </div>
        <hr/>
        <button onClick={this.props.onAdd}>Add 1</button>
        <button onClick={this.props.onSub}>Remove 1</button>
        <hr/>
        <button onClick={() => this.props.onAddNumber(98)}>Add 98</button>
        <button onClick={() => this.props.onAddNumber(-98)}>Remove 98</button>

          <hr/>


          <button onClick={() => this.props.onAsyncAdd(100)}>Async Add 100</button>

          <Counter/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return{
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number) => dispatch(add_number(number)),
        onAsyncAdd: (number) => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
