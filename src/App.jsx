import { useState } from 'react'

import './App.css'
import BasicForm from './components/BasicForm'
import AdvancedForm from './components/AdvancedForm'

function App() {
  const [view , setView] = useState('basic')

  return (
    <div className="App">
      <nav>
        <h3 onClick={() => setView('basic')}
        style={{color: view === 'basic' ? '#fff' : ''}}
        >
        Basic
        </h3>
        <h3 onClick={() => setView('advanced')}
          style={{ color: view === 'advanced' ? '#fff' : ''}}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic"? <BasicForm /> : <AdvancedForm />}
    </div>
  )
}

export default App
