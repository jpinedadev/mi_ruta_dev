import logo from './logo.svg';
import './App.css';
import FavoriteColor from './components/usestate/FavoriteColor';
import Car from './components/usestate/Car';
import CarObject from './components/usestate/CarObject';

function App() {
  return (
    <div className="App">
        <h1>React Hooks!</h1>
        <FavoriteColor/>
        <Car/>
        <CarObject/>
    </div>
  );
}

export default App;
