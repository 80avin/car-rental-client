import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo2.png'

const Signin = () => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form-signin text-center">
      <Link to="/">
        <img src={logo} className="mb-4 brand" alt="" height="28px" width="275px" />
      </Link>
      <h1 className="h3 mb-3 font-weight-normal">SignIn</h1>
      <label htmlFor="inputPhone" className="sr-only">Phone </label>
      <input type="tel" id="inputPhone" className="form-control" placeholder="Phone" required autoFocus/>
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <Link to="/signup">
        Already have an account?
      </Link>
    </form>
  )
}

export default Signin
