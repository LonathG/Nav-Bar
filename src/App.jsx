import NavBar from './navBar.jsx'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Users from './Users.jsx'
import Content from './Content.jsx'
import Inquiry from './Inquiry.jsx'
import Analytics from './Analytics.jsx'


function App() {


  return (
    <>
    <NavBar/>
    <div className="Admin-container">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="/Content" element={<Content/>}></Route>
        <Route path="/Inquiry" element={<Inquiry/>}></Route>
        <Route path="/Analytics" element={<Analytics/>}></Route>
      </Routes>
    </div>
    </>
  )
  
}

export default App
