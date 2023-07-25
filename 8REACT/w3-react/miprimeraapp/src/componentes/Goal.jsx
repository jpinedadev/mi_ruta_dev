import React from "react"
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";


function Goal(props){

    const isGoal = props.isGoal;
    /*if(isGoal){
        return <MadeGoal/>;
    }
    return <MissedGoal/>;
    */

    //usando operador ternario
    return (
        <div>
          { isGoal ? <MadeGoal/> : <MissedGoal/> }
       </div>
    );
}

export default Goal
