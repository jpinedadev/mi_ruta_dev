import React from 'react';

class Car extends React.Component {

    constructor(){
        super();
        this.state = {color:'red'}
    }

    render() {
        return (
            <>
                <h2>Hi, I am a  {this.state.color} car!</h2> 
            </>
        );
    }
}

export default Car;
