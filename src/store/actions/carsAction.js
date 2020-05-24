export const ADD_CARS="SET_CARS";

export const requestCars = () => (dispatch, getState) =>{
  const state = getState();
  fetch('/api/v1/cars',{
    method:'get',
    headers:{
      authorization:"Bearer "+localStorage.getItem('token'),
    }
  }).then(res=>res.json())
  .then(res=>{
    console.log({res})
    if(res.done) dispatch(setCars(res.cars))
  })
}

export const setCars = (cars)=>{
  return {
    type : ADD_CARS,
    payload: cars
  }
}