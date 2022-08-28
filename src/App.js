import {useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../src/components/Card'
import Footer from './components/Footer'
import Info from './components/Info'
import About from './components/About'
import Image from './components/Image'

const App = () => {
  const [users, setUsers] = useState(null)

  const fetchData = async () => {
    const userData = await axios.get('http://localhost:8000/user')
    const data = Object.keys(userData.data.data).map(user => userData.data.data[user])
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(users)

  return (
      <div>
      <Image />
      <div className="cont">
        {users?.map(user => <Info key={user.id} user = {user} />)}
        {users?.map(user => <About key={user.id} user = {user} />)}
      </div>
      
      {users?.map(user => <Footer key={user.id} user = {user} />)}
    </div>)
}

export default App