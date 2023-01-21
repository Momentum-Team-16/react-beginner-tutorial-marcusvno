import React, {useState} from 'react'
import './App.css';
import ColorChangeButton from './ColorChangeButton'

function App() {
  const [color, setColor] = useState('');

  return(
    <div className={`react-root ${color}`} >
      <div className='centered'>
        <h1>Color Picker</h1>
          <ColorChangeButton color='red' setColor={setColor}/>
          <ColorChangeButton color='blue'setColor={setColor}/>
          <ColorChangeButton color='yellow'setColor={setColor}/>
        
        <div>
          <button className='white' onClick={() => setColor('white')}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App;
