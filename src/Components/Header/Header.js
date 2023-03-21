import React from 'react'
import { Button } from "react-bootstrap";
import "./header.css"
const Header = () => {
  return (
    <div className="container-fluid text-sm-left p-5 bg-secondary "> 
        <h2  className="display-4 text-white">Breakig News</h2>
        <p className="lead text-white">A One-day Conference About All Things JavaScript!</p>
        <Button variant="info">Read More</Button>
    </div>
  )
}

export default Header