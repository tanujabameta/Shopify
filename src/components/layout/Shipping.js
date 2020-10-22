import React from 'react'
//import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ConfirmOrder from './ConfirmOrder';

export default function Shipping() {
    const {register, handleSubmit }= useForm([]);
    

    const onSubmit = (data) => {
      //debugger
      console.log(JSON.stringify(data));
      console.log(data);
      
    };
  
    return (
        <React.Fragment>
            <h1 className="large text-primary">Shipping Address</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
        <label>Full Name</label>
        <input type="text" name="fullname" ref={register} />
        </div>
        <div className="form-group">
        <label>Email Id</label>
        <input type="text" name="email" ref={register} />
        </div>
        <div className="form-group">
        <label>Mobile Number</label>
        <input type="text" name="mobilenumber" ref={register} />
        </div>
        <div className="form-group">
        <label>Flat No</label>
        <input type="text" name="flatnum" ref={register} />
        </div>
        <div className="form-group">
        <label>Address</label>
        <textarea type="text" name="address" ref={register} ></textarea>
        </div>
        <div className="form-group">
        <label>Landmark</label>
        <input type="text" name="landmark" ref={register} />
        </div>
        <div className="form-group">
        <label>Pincode</label>
        <input type="text" name="pincode" ref={register} />
        </div>
        
        <input type="submit" className="btn btn-primary"/>
        
        {/* <ul>
    {data.map(dataobj =>(
     <li key={dataobj.fullname}> {dataobj.email} {dataobj.flatnum} {dataobj.address}</li>
    ))}
    </ul> */}
      </form>
      <br/>
       <ConfirmOrder /> 
      </React.Fragment>
    );
}
