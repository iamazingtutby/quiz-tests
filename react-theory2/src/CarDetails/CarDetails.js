import React from 'react';

export default class CarDetails extends React.Component {

    render() {
        console.log('car feyt', this.props);

        return (
        	<div style={{textAlign: 'center'}}>
                <h1>{this.props.match.params.name}</h1>
        	</div>
        );
    }

}
