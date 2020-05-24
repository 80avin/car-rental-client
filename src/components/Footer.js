import React from 'react'
import { Link} from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* <div className="card" style={{"width": "100;"}}> */}
          <div className="card-body">
            <h5 className="card-title">Rent Vroom</h5>
            <p className="card-text">Rent Vroom Pvt. Ltd.</p>
            <p className="card-text">No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla</p>
            <p className="card-text">Bengaluru, Karnataka 560034</p>
            <Link href="#" className="card-link" style={{color:"black"}}>
            <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="card-link" style={{color:"black"}}>
              <i className="fab fa-instagram" title="instagram"/>
            </Link>
            <Link href="#" className="card-link" style={{color:"black"}}>
              <i className="fab fa-linkedin" title="linkedin"/>
            </Link>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Footer
