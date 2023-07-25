import React from 'react';

class CarProps extends React.Component {

    render() {
        return (
            <>
                <h2>Hi, I am a  {this.props.color} car! (props)</h2> 
            </>
        );
    }
}

export default CarProps;
