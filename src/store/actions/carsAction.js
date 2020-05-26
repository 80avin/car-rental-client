export const SET_CARS="SET_CARS";
export const REMOVE_CARS="REMOVE_CARS";
export const SELECT_CAR="SELECT_CAR";
export const SELECT_CAR_REQUEST="SELECT_CAR_REQUEST";
export const DESELECT_CAR="DESELECT_CAR";
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
    type : SET_CARS,
    payload: cars
  }
}

export const selectCarRequest = (model)=>(dispatch, getState) => {
  fetch('/api/v1/cars/'+model,{
    method:'get',
    headers:{
      authorization:"Bearer "+localStorage.getItem('token'),
    }
  }).then(res=>res.json())
  .then(res=>{
    console.log({res});
    if(res.done) dispatch(selectCar(res.car));
  })
}

export const selectCar = (car)=>{
  return {
    type: SELECT_CAR,
    payload: car
  }
}

export const deselectCar = ()=>{
  return {
    type: DESELECT_CAR,
  }
}

export const selectCarRequestFailed = error =>{
  return {
    type: SELECT_CAR,
    payload:{error}
  }
}