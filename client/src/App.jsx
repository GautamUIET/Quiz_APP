import React from 'react'
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { CheckUserExist } from './helpers/helper';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/quiz' element={<CheckUserExist><Quiz/></CheckUserExist>}/>
        <Route path = '/result' element={<CheckUserExist><Result/></CheckUserExist>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App