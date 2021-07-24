import { useState } from 'react';
import './App.css';
import Defaultdata from './components/Defaultdata';
import FetchingSearch from './components/FetchingSearch';

function App() {
  const [def, setDef] = useState(true)
  function handleSearch(){
    setDef(!def)
  }
  function handleHome(){
    setDef(!def)
  

  }
    return (
    
    <div className="App">
      <button onClick={()=>handleHome()} disabled={def}>Home</button>
      <button onClick={()=>handleSearch()} disabled={!def}>Search Images</button>
     { def===true?
      <Defaultdata/>:
      <FetchingSearch/>}
      
      

    </div>
  );
}

export default App;
