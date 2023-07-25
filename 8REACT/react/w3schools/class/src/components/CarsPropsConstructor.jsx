import React from 'react';

class CarPropsConstructor extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <h2>Hi, I am a  {this.props.color} car! (props constructor)</h2> 
            </>
        );
    }
}

export default CarPropsConstructor;
