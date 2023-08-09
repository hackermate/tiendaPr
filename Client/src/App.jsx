import { Route, Routes } from 'react-router-dom'
import Inventory from './Page/Inventory'
import './App.css'



function App() { 

  return (
    <div>
      <Routes>
        <Route path='/inventory' element={<Inventory />}/>
      </Routes>
    </div>
  ) 
}

export default App
