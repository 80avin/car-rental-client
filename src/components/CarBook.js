import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import carIcon from '../assets/images/generic-car.png'
import { Icon } from "@mdi/react";
import { mdiEyedropper, mdiSeatPassenger } from "@mdi/js";
import Header from './Header';

import { selectCarRequest, deselectCar } from "../store/actions/carsAction";
import { currentBookingRequest, setNewBookingRequestStatus, newBookingRequest } from "../store/actions/bookingsAction";

export const CarBook = (props) => {
  const params = useParams();
  const history = useHistory()
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    props.deselectCar();
    props.setNewBookingRequestStatus('none');
    props.selectCarRequest(params.carmodel);
  }, [])

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

  const backClick = () => {
    history.goBack();
  }

  const bookClick = () => {
    if (new Date(issueDate) >= new Date(returnDate)) {
      alert("Error : return date should be greater than issue date")
      return;
    }
    props.newBookingRequest({
      car:props.car.model,
      issueDate:new Date(issueDate),
      returnDate:new Date(returnDate)
    })
  }

  const renderBlockingDiv=()=>{
    let heading, message;
    console.log({props})
    if(props.newBookingRequestStatus==='loading'){
      heading='loading';
      message=""
    }
    else if(props.newBookingRequestStatus==='done'){
      heading="Booking Confirmed!"
      message="You have booked "+props.car.model+"\nfor the duration "+issueDate+' - '+returnDate;
    }
    else if(props.newBookingRequestStatus==='fail'){
      heading="Error!";
      message='Booking Failed';
    }
    return <div className="block-everything">
      <div className="container col-6" style={{backgroundColor:"white",borderRadius:"10px"}}>
        <h3>{heading}</h3>
        {message.split('\n').map(m=>(<p>{m}</p>))}
      </div>
    </div>
  }

  return (
    <>
      <div className="container col-8">
        <form>
          <div className="row">
            <div className="input-group mb-3 col-6">
              <label for="nameInput">Name</label>
              <input type="text" id="nameInput" value={JSON.parse(localStorage.getItem("user")).name} disabled />
            </div>
            <div class="input-group mb-3 col-6">
              <label for="contactNumberInput">Contact Number</label>
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">+91</span>
              </div>
              <input type="text" id="contactNumberInput" class="form-control" disabled value={JSON.parse(localStorage.getItem("user")).phone.replace('+91', '')} />
            </div>
          </div>
          <div className="row">
            <div className="input-group mb-3 col-6">
              <label for="issueDateInput">Issue Date</label>
              <input type="date" id="issueDateInput" value={issueDate} onChange={e => setIssueDate(e.target.value)} />
            </div>
            <div className="input-group mb-3 col-6">
              <label for="returnDateInput">Return Date</label>
              <input type="date" id="returnDateInput" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
            </div>
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <button className="btn" onClick={(e) => { e.preventDefault(); backClick() }}>Back</button>
            <button className="btn btn-dark" onClick={e => { e.preventDefault(); bookClick() }}>Book Now</button>
          </div>
        </form>
      </div>
      {(props.newBookingRequestStatus==='loading'||props.newBookingRequestStatus==='done'||props.newBookingRequestStatus==='fail')?renderBlockingDiv():<></>}
    </>
  )
}

const mapStateToProps = (state) => ({
  car: state.selectedCar,
  booking: state.currentBooking,
  bookingRequestStatus: state.bookingRequestStatus,
  newBookingRequestStatus: state.newBookingStatus
})

const mapDispatchToProps = dispatch => {
  return {
    selectCarRequest: (model) => { dispatch(selectCarRequest(model)) },
    deselectCar: () => dispatch(deselectCar()),
    currentBookingRequest: (carId) => { dispatch(currentBookingRequest(carId)) },
    setNewBookingRequestStatus: (status) => { dispatch(setNewBookingRequestStatus(status)) },
    newBookingRequest:(booking)=>{dispatch(newBookingRequest(booking))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarBook)
