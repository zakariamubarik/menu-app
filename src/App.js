import React from 'react'
import { Route, Routes} from "react-router-dom"
import Login from "./screens/Login"
import Register from './screens/Register'
import Home from './screens/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;