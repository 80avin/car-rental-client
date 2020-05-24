import React from 'react'
import carIcon from '../../assets/images/grand-i10.png'

const CarListItem = (props) => {
  console.log(props);
  
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={carIcon} className="card-img" alt="..." />
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <h5 className="card-title">Hyundai Grand i10</h5>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="col-md-3">

        </div>
        <div className="col-md-3">

        </div>
      </div>
    </div>
  )
}

export default CarListItem
