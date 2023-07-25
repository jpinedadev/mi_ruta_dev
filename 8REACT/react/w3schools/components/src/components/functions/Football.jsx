import React from 'react';

const Football = (props) => {

	function shoot(){
		console.log('Great shoot!')
		alert('Great shoot!')
	}

    return (
        <button onClick={ shoot }>Take the shoot!</button>
    );
};

export default Football;
