import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home"
import Header from "./components/header/Header"
import Login from './pages/auth/Login'
import Verify from './pages/auth/Verify'
import Register from './pages/auth/Register'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Account from './pages/account/Account'
import { UserData } from './context/UserContext'
import Loading from "./components/loading/Loading";
import Courses from './pages/courses/Courses'
import CourseDescription from './pages/coursedescription/CourseDescription'

const App = () => {
  const {isAuth , user,loading} = UserData()
  return (
    <>
  {loading ? 
        <Loading />
      : 
    <BrowserRouter>
  <Header isAuth={isAuth}/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/courses" element={<Courses/>} />

    <Route path="/account" element={isAuth?<Account user={user}/> : <Login/>} />
    <Route path="/login" element={isAuth? <Home/> : <Login/>} />
    <Route path="/register" element={isAuth? <Home/> : <Register/>} />
    <Route path="/verify" element={isAuth? <Home/> : <Verify/>} />
    <Route path="/course/:id" element={isAuth?<CourseDescription user={user}/> : <Login/>}/>

  </Routes>
  </BrowserRouter>}
  <Footer/>
  </>
  )
}

export default App
