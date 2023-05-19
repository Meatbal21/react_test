import { useState } from 'react'
import {userData} from "./utils/users.js"
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'

function App() {
  //console.log(userData)
  //create state
  //const [users, setUsers] = useState(userData)
  const [users, setUsers] = useState([])


  return (
    <div className="App">
      <Header userData={userData} setUsers={setUsers} />
      <Homepage users={users} />
    </div>
  )
}

export default App
