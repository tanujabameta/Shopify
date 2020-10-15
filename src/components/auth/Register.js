import React, { Fragment } from 'react'

const Register = () => {
    return (
        <Fragment><h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" action="create-profile.html">
          <div className="form-group">
            <input type="text" placeholder="First Name*" name="firstName" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastName" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address*" name="email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address Line1*" name="addressLine1" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Address Line2" name="addressLine2" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Postal Code*" name="postalCode" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Country Name*" name="countryName" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="User Name*" name="userName" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password*"
              name="password"
              minLength="6"/>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password*"
              name="password2"
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p></Fragment>
    )
}


export default Register