import './App.css';
import Car from './components/Car';
import CarProps from './components/CarsProps';
import CarPropsConstructor from './components/CarsPropsConstructor';
import CarState from './components/CarState';

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <Car/>
        <CarProps  color="Red" />
        <CarPropsConstructor color="Red" />
        <CarState/>
    </div>
  );
}

export default App;
