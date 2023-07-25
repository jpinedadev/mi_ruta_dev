import logo from './logo.svg';
import Card from './components/Card.jsx'
import img from './assets/img/gye.jpg'

function App() {
  return (
    <div className="container mx-auto">

      <div className="my-5 flex flex-wrap -mx-2">
       <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo={img} />
       </div>

       <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo={img} />
       </div>

       <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo={img} />
       </div>
      </div>

    </div>
  );
}

export default App;
