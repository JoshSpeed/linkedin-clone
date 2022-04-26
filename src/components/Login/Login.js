import React from 'react'
import './Login.css'

function Login() {
  const register = () => {}
  const loginToApp = () => {}

  return (
    <div className='login'>
      <img
        src='https://www.pikpng.com/pngl/b/53-533354_linkedin-logo-transparent-png-linkedin-logo-png-clipart.png'
        alt=''
      />

      <form>
        <input type='text' placeholder='Full Name (Required if registering)' />
        <input type='text' placeholder='Profile pic URL (optional)' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

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
