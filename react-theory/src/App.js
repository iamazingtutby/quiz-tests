import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            clicked: false,
            cars : [
                {name: 'Ford', year: 2018},
                {name: 'Mazda', year: 2016},
                {name: 'Lexus', year: 2013},
                {name: 'Mazda', year: 2016}
            ],
            pageTitle: 'Page title!!',
            carsVisible: false
        }
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle,
        })
    };

    changeInputHandler = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    };

    carsVisibleHandler = () => {
      this.setState({
          carsVisible: !this.state.carsVisible
      })
    };

    changeTitleNameHandler = (name, index) => {
        console.log(name, index);
        const car = this.state.cars[index];
        car.name = name;

        const cars = [...this.state.cars];
        cars[index] = car;

        this.setState({
            cars: cars
        })
    };

    onDelete = (index) => {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);

        this.setState({
            cars: cars
        })
    }

    render() {
        const divStyle = {
            'textAlign': 'center'
        };

        let cars = null;
        if(this.state.carsVisible){
          cars = this.state.cars.map((car, index) => {
              return(
                  <Car
                      key={index}
                      name={car.name}
                      year={car.year}
                      index={index}
                      onDeleteCar={this.onDelete.bind(this, index)}
                      onChangeTitleName={(event) => this.changeTitleNameHandler(event.target.value, index)}
                  />
              )
          })
        }

        return (
            <div style={divStyle}>
              <h1>{this.state.pageTitle}</h1>
                <h2>{this.props.title}</h2>

              <div>
                <input type="text" onChange={this.changeInputHandler}/>
              </div>

                <hr/>

                <ClickedContext.Provider value={this.state.clicked}>
                    <Counter />
                </ClickedContext.Provider>

                <hr/>



              <button
                  onClick={this.carsVisibleHandler}>
                cars toggle
              </button>

                <button onClick={() => this.setState({clicked: true})}>change clicked</button>

                {/*{ this.state.carsVisible ?*/}
                  {/*this.state.cars.map((car, index) => {*/}
                    {/*return(*/}
                        {/*<Car*/}
                            {/*key={index}*/}
                            {/*name={car.name}*/}
                            {/*year={car.year}*/}
                            {/*onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
                        {/*/>*/}
                    {/*)*/}
                  {/*})*/}
                    {/*: null*/}
                {/*}*/}

                <span>cars list</span>
                { cars }

            </div>
        );
    }
}

export default App;
