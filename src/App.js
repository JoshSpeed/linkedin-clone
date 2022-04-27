import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser, logout, login } from './features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { auth } from './firebase'
import './App.css'

import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Sidebar from './components/Body/Sidebar'
import Feed from './components/Body/Feed'
import Widgets from './components/RightSide/Widgets'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      console.log('hello')
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
          })
        )
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])

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
          <Widgets />
        </div>
      )}
    </div>
  )
}

export default App
