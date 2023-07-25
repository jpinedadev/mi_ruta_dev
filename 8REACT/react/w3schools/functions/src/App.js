import './App.css';
import Car from './components/Car';
import Garage from './components/CarGarage'
import Garage2 from './components/CarName'
import Garage3 from './components/CarInfo'

function App() {
  return (
    <div className="App">
        <h1>React funcional</h1>
        <Car brand="Ford"/>
        <Garage/>
        <Garage2/>
        <Garage3/>
    </div>
  );
}

export default App;
