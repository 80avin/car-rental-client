import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CarListItem from './Home/CarListItem';
import Header from './Header';
import Footer from "./Footer";
import {requestCars} from '../store/actions/carsAction'

const Home = (props) => {
  // const car = { name: 'name', img: 'img' }
  useEffect(() => {
    props.requestCars()
  }, [])
  const render_list = ()=>{
    console.log({props})

    return props.cars.map(car => {
      return <CarListItem car={car} />
    });
  }
  return (
    <>
      <Header />
      <div className="container">
        <h2>Cars for rent</h2>
        <div className="container">
          {render_list()}
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({
  cars: state.cars
})

const mapDispatchToProps = dispatch => {
  return {
    requestCars: () => {
      dispatch(requestCars());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)