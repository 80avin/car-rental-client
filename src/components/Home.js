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
    console.log({props});
    const heading = (
        <div className="row mb-4 centered"  style={{color:"#697C90"}}>
          <div className="col-md-3">
            
          </div>
          <div className="col-md-3 centered">
            Car Details
          </div>
          <div className="col-md-3 centered">
            RENT PER DAY
          </div>
          <div className="col-md-3">
  
          </div>
      </div>)
    return (
      <>
      {heading}
      {props.cars.map(car => {
      return <CarListItem car={car} />
    })}
    </>
    )
  }
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="mb-4">Cars for rent</h2>
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