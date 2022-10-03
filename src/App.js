import { useState } from 'react'
import './App.css';

function App() {
  const [age, setAge] = useState(50)
  const [upperrate, setUpperrate] = useState()
  const [lowerrate, setLowerrate] = useState()
  
  function laske(e) {
    e.preventDefault()
    const tulos1 = (220 - age) *0.85
    const tulos2 = (220 - age) *0.65
    setUpperrate(tulos1)
    setLowerrate(tulos2)
  }


  
  return (
    <div className='tausta'>
      <h2>Heart rate limits calculator</h2>
      <form onSubmit={laske}>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
         <label>Heart rate limits</label>
         </div>
         <div id="text-box">
         <output>{ lowerrate} - {upperrate} </output>
        </div>
        <button>Calculate</button>
      </form>
      
    </div>
  );
}

export default App;
