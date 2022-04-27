import React, { useState } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

import './Login.css'
import { auth } from '../../firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL
          })
        )
      })
      .catch((error) => {
        alert(error)
      })
  }

  const register = () => {
    if (!name) {
      return alert('Please enter full name')
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic
          })
        )
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <img
        src='https://www.pikpng.com/pngl/b/53-533354_linkedin-logo-transparent-png-linkedin-logo-png-clipart.png'
        alt=''
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name (Required if registering)'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
          placeholder='Profile pic URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
