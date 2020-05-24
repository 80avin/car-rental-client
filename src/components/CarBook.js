import React from 'react'
import { useParams } from 'react-router-dom'

const CarBook = () => {
  const {carmodel} = useParams();
  return (
    <div>
      {carmodel}
    </div>
  )
}

export default CarBook
