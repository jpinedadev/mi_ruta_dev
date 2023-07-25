import './App.css';
//import Football from './componentes/Football'
//import Goal from './componentes/Goal'
//import Garage from './componentes/Garage'
//import MyForm from './componentes/MyForm'
import Form from './componentes/Form'

function App() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

  return (
      <div className="App">
          {/* <h1>Hola mundo!</h1>
          <Football/>
          <Goal isGoal={true}/>
          <Garage cars={cars}/>
          <MyForm/> */}

          <Form/>
    </div>
  );
}

export default App;
