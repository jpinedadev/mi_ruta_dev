import './App.css';
/*import Garage from './components/props/Garage';
import Football from './components/functions/Football'
import Counter from './components/functions/Counter'
import Goal from './components/conditionals/Goal.jsx'
import Ternary from './components/conditionals/Ternary';
import GarageMap from './components/list/GarageMap';
import GarageKey from './components/list/GarageKey';*/
import MyForm from './components/forms/MyForm';
import MyForm2 from './components/forms/MyForm2';
import MyForm3 from './components/forms/MyForm3';
import MyForm4 from './components/forms/MyForm4';

function App() {
  return (
      <div className="App">
          {/*<Garage/>
        <Football/>
        <Counter/>
        <Goal isGoal={ false }/>
        <Ternary isGoal={ false }/>
        <GarageMap/>
        <GarageKey/>*/}
        
        <h1>Formularios</h1>
        <MyForm/>
        <MyForm2/>
        <MyForm3/>
        <h2>Multiple input fields</h2>
        <MyForm4/>

    </div>
  );
}

export default App;
