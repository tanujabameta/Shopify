import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <Fragment><h1 className="large text-primary">Login In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign in </p>
        <form className="form" action="Product.js">
          <div className="form-group">
            <input type="text" placeholder="User Name*" name="userName" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Password*" name="password" required />
          </div>
         <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't Have Account? <Link to="/register">Sign Up</Link>
        </p></Fragment>
    )
}
export default Login;
