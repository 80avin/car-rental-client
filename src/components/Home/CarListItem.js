import React from 'react'
import carIcon from '../../assets/images/generic-car.png'
import { useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiSeatPassenger, mdiEyedropper } from '@mdi/js';

const CarListItem = (props) => {
  console.debug(props);
  const history = useHistory();
  const selectCar = ()=>{
    history.push("/"+props.car.model);
  }

  
  const bookCar=()=>{
    history.push('/'+props.car.model+'/book')
  }

  return (
    <div className="card">
      <div className="row no-gutters centered">
        <div className="col-md-3">
          <img src={props.car.photos.length>=1?props.car.photos[0]:carIcon} className="card-img" alt={props.car.model} />
        </div>
        <div className="col-md-3 centered">
          <div className="card-body">
            <h5 className="card-title">{props.car.model}</h5>
            
            <div className="d-flex card-text" style={{ justifyContent: "space-around" }}>
                <small className="text-muted">
                  <Icon path={mdiEyedropper} size={1} />
                  &nbsp;&nbsp;
                  {props.car.color}</small>
                <small className="text-muted">
                  <Icon path={mdiSeatPassenger} size={1} />
                  &nbsp;&nbsp;
                    {props.car.capacity}
                </small>
              </div>
          </div>
        </div>
        <div className="col-md-3 centered">
          <p>₹{props.car.rentPerDay}</p>
        </div>
        <div className="col-md-3 d-flex" style={{justifyContent:"space-around"}}>
        <button type="button" class="btn btn-secondary" onClick={(e)=>{e.preventDefault(); bookCar()}}>Book Now</button>
        <button type="button" class="btn btn-light" onClick={(e)=>{e.preventDefault(); selectCar()}}>Details</button>
        </div>
      </div>
    </div>
  )
}

export default CarListItem
