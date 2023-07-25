import React from 'react';

const Counter = () => {

	let count = 0;
	function change(){
		count = count+1;
		console.log(count)
	}

    return (
    	<div>
        <button onClick={ change }>Change!</button>
        </div>
    );
};

export default Counter;
