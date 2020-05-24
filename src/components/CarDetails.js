import React from 'react'
import { useParams } from 'react-router-dom'

const CarDetails = () => {
  const {carmodel} = useParams();
  return (
    <div>
      {carmodel}
    </div>
  )
}

export default CarDetails
