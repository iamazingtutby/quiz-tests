import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetails from './CarDetails/CarDetails'

class App extends Component {
    state = {
        isLoggedIn: false
    }
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'activeLink'}>Home</NavLink>
            </li>
            <li>
              <NavLink
                  to="/about"
                  activeStyle={{
                      color: 'blue',
                      fontWeight: 'bold'
                  }}
              >About</NavLink>
            </li>
            <li>
              <NavLink
                  to={{
                      pathname: '/cars',
                      search: '?a=0&b=1',
                      hash: 'smthHash'
                  }}
              >Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

          <div style={{textAlign: 'center'}}>
              <p>Is Logged In {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</p>
              <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
          </div>

          <hr/>

          <Switch>
              <Route path={'/'} exact render={() => <h1>HomePage</h1>}/>

              {this.state.isLoggedIn ? <Route path={'/about'} component={About}/> : null }

              <Route path={'/cars/:name'} component={CarDetails}/>
              <Route path={'/cars'} component={Cars}/>
              {/*<Redirect to={'/'} />*/}
              <Route render={() => <h1 style={{textAlign: 'center', color: 'red'}}>40404040400</h1>} />
          </Switch>


      </div>
    );
  }
}

export default App
