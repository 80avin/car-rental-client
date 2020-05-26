export const CURRENT_BOOKING_REQUEST = "CURRENT_BOOKING_REQUEST";
export const SET_CURRENT_BOOKING = "SET_CURRENT_BOOKING";
export const UNSET_CURRENT_BOOKING = "UNSET_CURRENT_BOOKING";
export const BOOKING_REQUEST_STATUS = "BOOKING_REQUEST_STATUS";
export const NEW_BOOKING_REQUEST = "NEW_BOOKING_REQUEST";
export const SET_NEW_BOOKING_REQUEST_STATUS = "SET_NEW_BOOKING_REQUEST_STATUS";


export const populateUserInBooking = async (bookings) => {
  let newBookings = [];
  for (let b of bookings) {
    const u = await fetch('/api/v1/user/' + b.customer).then(res => res.json());
    if (u.done)
      newBookings = [...newBookings, { ...b, customer: u.user }]
    else
      newBookings = [...newBookings, { ...b, customer: null }]
  }
  return newBookings;
}

export const currentBookingRequest = (carId) => async (dispatch, getState) => {
  dispatch(setBookingRequestStatus('loading'));
  const curDate = new Date().toISOString();
  let res = await fetch('/api/v1/bookings?car=' + carId + '&fromTime=' + curDate + '&toTime=' + curDate,
    {
      method: 'get',
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(res => res.json())
  if (res.done) {
    let bookings = res.bookings;
    console.log({ bookings })
    bookings = await populateUserInBooking(bookings);
    dispatch(setCurrentBooking(bookings));
  }
  else{
    dispatch(setBookingRequestStatus('fail'))
  }

}

export const setBookingRequestStatus=(status)=>{
  return {
    type:BOOKING_REQUEST_STATUS,
    payload:status,
  }
}

export const setCurrentBooking = (bookings) =>dispatch => {
  console.log(bookings)
  dispatch(setBookingRequestStatus('done'))
  dispatch({
    type: SET_CURRENT_BOOKING,
    payload: bookings
  });
}

export const newBookingRequest=(booking)=>(dispatch)=>{
  dispatch(setNewBookingRequestStatus('loading'));
  fetch('/api/v1/cars/'+encodeURIComponent(booking.car)+'/book',{
    method:'post',
    headers:{
      authorization:'Bearer '+localStorage.getItem('token'),
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      issueDate:booking.issueDate,
      returnDate:booking.returnDate,
    })
  }).then(res=>res.json())
  .then((res)=>{
    console.log({res})
    if(res.done) dispatch(setNewBookingRequestStatus('done'))
    else dispatch(setNewBookingRequestStatus('fail'))
  })
}
export const setNewBookingRequestStatus=(status)=>{
  return {
    type:SET_NEW_BOOKING_REQUEST_STATUS,
    payload:status,
  }
}

export const unsetCurrentBooking = () => {
  return {
    type: UNSET_CURRENT_BOOKING,
  }
}