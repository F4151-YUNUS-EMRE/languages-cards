import './App.css';
import Card from './components/main/Card';
import languages from "./components/main/data";

const App =()=>{
  return(
    < div className = "app mt-4" >
      <div className="header text-center">
        <h2 className='display-5 fw-bold text-white p-2'> Languages </h2>
      </div>
      <div className="cards">
          {languages.map((item,index)=> <Card {...item} key={index}/>)}
      </div>
    </div>
  )
}

export default App;
