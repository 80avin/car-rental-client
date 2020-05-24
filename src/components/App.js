import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, useHistory, Switch, Route } from 'react-router-dom'

import '../css/App.css'

import Home from './Home';
import CarDetails from './CarDetails';
import CarBook from './CarBook';
import Signin from './Signin';
import Signup from './Signup';

const Routing = ()=>{
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if(user && token){
      history.push('/');
    }
    else{
      history.push('/signin');
    }
  }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/signin'>
        <Signin/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/:carmodel'>
        <CarDetails/>
      </Route>
      <Route path='/:carmodel/book'>
        <CarBook/>
      </Route>
      <Route path='/error'>
        error
      </Route>
      
    </Switch>
  )
}

export const App = () => {
  return (

    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
