import React from 'react'
import Home from './Home/Home'
import {Route,Routes} from 'react-router-dom'
import Courses from './pages/Courses'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <div className='  dark:bg-slate-900 dark:text-white'>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/course' element={<Courses/>}/>
         <Route path='/signup' element={<SignUp/>}/>
       </Routes>
    </div>
  )
}

export default App
