import React from 'react'
import {ClickedContext} from '../App'

export default (props) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            margin: '0 auto',
            width: '200px'
        }}>
            <h2>Counter 2</h2>
            <ClickedContext.Consumer>
                {(clicked) => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}