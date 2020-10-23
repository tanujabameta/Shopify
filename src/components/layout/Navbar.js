import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/Shopify"><i className="fas fa-code"></i> UberCart</Link>
      </h1>
      <ul>
        <li><Link to ="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to='/cartDetails'><i class="shopping cart icon"/></Link></li>
      </ul>
    </nav>
    )
}

export default Navbar
