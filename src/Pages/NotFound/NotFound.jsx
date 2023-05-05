import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { home } from '../../config/routeConstances'

const NotFound = () => {
  return (
    <div> 
        <h1> 404 | Page Not Available</h1>
        <Link to={home}><Button className="btn btn-save">Go To Our Home Page</Button></Link>
    </div>
        
  )
}

export default NotFound