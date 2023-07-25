import './App.css';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import Timer from './components/Timer';
import Counter from './components/Counter';

function App() {
  return (
      <div className="App">
          <FavoriteColor/>
          <Car/>
          <Timer/>
          <Counter/>
      </div>
  );
}

export default App;
