import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <form >
          <label htmlFor="nombre" style={{margin:10}}>Nombre del estudiante</label>
          <input name='nombre' type="text" value={'Luis'} disabled/>

          <label htmlFor="semestre" style={{margin:10}}>Semestre del estuidiante</label>
          <input name='semestre' type="text" value={'Luis'} disabled/>


          <label htmlFor="nombre" style={{margin:10}}>Deporte favorito</label>
          <input name='nombre' type="text" value={'Luis'} disabled/>

          
        </form>
      </div>
    </div>
  )
}

export default App
