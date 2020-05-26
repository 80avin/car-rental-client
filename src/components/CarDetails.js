import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import carIcon from '../assets/images/generic-car.png'
import { Icon } from "@mdi/react";
import { mdiEyedropper, mdiSeatPassenger } from "@mdi/js";
import Header from './Header';

import { selectCarRequest, deselectCar } from "../store/actions/carsAction";
import { currentBookingRequest, unsetCurrentBooking } from "../store/actions/bookingsAction";
export const CarDetails = (props) => {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    props.deselectCar();
    props.unsetCurrentBooking();
    props.selectCarRequest(params.carmodel);
  }, [])

  useEffect(() => {
    if (props.car) props.currentBookingRequest(props.car._id);
  }, [props.car])

  if (!props.car) {
    return (
      <div className="container">
        Loading...
      </div>
    );
  }
  else if (props.car.error) {
    return (
      <div className="container">
        <h3>
          ERROR!
        </h3>
        <p>
          props.car.error
        </p>
      </div>
    )
  }

  const renderBooking = () => {
    // const currentBookings = props.bookings.filter((b)=>{return b.issueDate<=new Date() && b.returnDate>=new Date()});
    const currentbooking = props.booking;
    if(props.bookingRequestStatus==='loading'){
      return <div className="container">
        Loading...
      </div>
    }
    else if (props.bookingRequestStatus==='done' && currentbooking.length === 0) {
      return <div className="container">
        No active booking
      </div>
    }
    else if(props.bookingRequestStatus==='fail'){
      return <div>
        Error
      </div>
    }


    return <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Issue Date</th>
          <th>Return Date</th>
        </tr>
      </thead>
      <tbody>
        {currentbooking.map(b => {
          return (
            <tr>
              <td>{b.customer ? b.customer.name : '-'}</td>
              <td>{b.customer ? b.customer.phone : '-'}</td>
              <td>{new Date(b.issueDate).toLocaleDateString()}</td>
              <td>{new Date(b.returnDate).toLocaleDateString()}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  }
  const bookCar=()=>{
    history.push('/'+props.car.model+'/book')
  }

  return (
    <>
      <Header />
      <div className="container col-md-8">

        <div className="card mb-5">
          <div className="row no-gutters centered">
            <div className="col-md-6">
              <img src={props.car.photos.length >= 1 ? props.car.photos[0] : carIcon} className="card-img" alt={props.car.model} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title mb-3">{props.car.model}</h5>
                <div className="d-flex card-text mb-3" style={{ justifyContent: "space-around" }}>
                  <small className="text-muted">
                    <Icon path={mdiEyedropper} size={.8} />
                  &nbsp;&nbsp;
                  {props.car.color}</small>
                  <small className="text-muted">
                    <Icon path={mdiSeatPassenger} size={.8} />
                  &nbsp;&nbsp;
                    {props.car.capacity} Seater
                </small>
                </div>
                <p>Rent per day: &nbsp;₹{props.car.rentPerDay}</p>
                <div className="d-flex" style={{}}>
                  <button type="button" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); bookCar() }}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <h3>Car Details</h3><hr />
          {props.car.description.split('\n').map((i, key) => {
            return <p key={key}>{i}</p>
          })}
        </div>
        <div className="container mb-5">
          <h3>Current Booking</h3><hr />
          {renderBooking()}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  car: state.selectedCar,
  booking: state.currentBooking,
  bookingRequestStatus:state.bookingRequestStatus,
})

const mapDispatchToProps = dispatch => {
  return {
    selectCarRequest: (model) => { dispatch(selectCarRequest(model)) },
    deselectCar: () => dispatch(deselectCar()),
    currentBookingRequest: (carId) => { dispatch(currentBookingRequest(carId)) },
    unsetCurrentBooking: () => { dispatch(unsetCurrentBooking()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)
