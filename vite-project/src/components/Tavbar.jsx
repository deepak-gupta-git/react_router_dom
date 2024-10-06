import React from 'react'
import { Link } from 'react-router-dom'

const Tavbar = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div className="btns">
       <Link to="/contact"> <button>Contact</button></Link>
       <Link to="/about"> <button>About Us</button> </Link>
        <Link to = "/home" ><button>Home</button> </Link>
      </div>
    </div>
  )
}

export default Tavbar
