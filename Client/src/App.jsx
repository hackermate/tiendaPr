import Items from './components/Items'
import Orders from './components/Orders'
import OrderForm from './components/OrderForm'
import Ordenes from './Page/Ordenes'
import './App.css'
import { Route, Routes } from 'react-router-dom'



function App() { 

  return (
    <div>
      <Routes>
        <Route path='/items' element={<Items />}/>
        <Route path='/ordenes' element={<Orders />}/>      
        <Route path='/orderform' element={<OrderForm />}/>  
        <Route path='/ordenes/:id'   element={<Ordenes/>}/>
      </Routes>
    </div>
  )
}

export default App
