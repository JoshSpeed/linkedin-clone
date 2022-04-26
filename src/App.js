import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './App.css'

import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Sidebar from './components/Body/Sidebar'
import Feed from './components/Body/Feed'

function App() {
  const user = useSelector((state) => state.user.user)

  return (
    <div className='app'>
      <Header />

      {/* If no user then render login page - otherwise render rest of the app */}
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  )
}

export default App
