import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../assets/images/logo2.png'
import {signin, signinRequest} from '../store/actions/userActions'

const Signin = (props) => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const postData = (e)=>{
    e.preventDefault();
    if(!phone || password.length<1) return;
    props.signinRequest(phone, password);
    history.push('/')
  }
  return (
    <form className="form-signin text-center" onSubmit={postData}>
      <Link to="/">
        <img src={logo} className="mb-4 brand" alt="" height="28px" width="275px" />
      </Link>
      <h1 className="h3 mb-3 font-weight-normal">SignIn</h1>
      <label htmlFor="inputPhone" className="sr-only">Phone </label>
      <input
        type="tel" placeholder="Phone" pattern="[0-9]{10}"
        id="inputPhone" className="form-control" required autoFocus
        value={phone} onChange={(e) => setPhone(e.target.value)} />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword"
       className="form-control" placeholder="Password" required=""
       value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <Link to="/signup">
        Don't have an account?
      </Link>
    </form>
  )
}

const mapStateToProps = (state) => ({
  
})


const mapDispatchToProps = dispatch => {
  return {
    signin: (user,token) => {
      dispatch(signin(user,token));
    },
    signinRequest: (phone, password)=>{
      dispatch(signinRequest(phone, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
