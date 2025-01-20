import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login1'>
       <img src={logo} alt="" className='login-logo' />
      <div className="login">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder='Email or Phone Number' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Sign In</button>
          <div className='forgot-password'>Forgot Password?</div>
        </form>
      </div>
    </div>
  )
}

export default Login
