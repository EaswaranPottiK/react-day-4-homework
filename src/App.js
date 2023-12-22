import Data from './Data.json'
import './App.css';
import Card from './Card';

function App() {
  return (
    <div>
      {Data.map((item,index)=>(
        //  movieName={index.movieName}
        <Card movieName={item.movieName} year={item.year} time={item.time} typeOfMove={item.typeOfMove} thumb={item.thumb} poster={item.poster}/>
      ))}

      
    </div>
  );
}

export default App;
