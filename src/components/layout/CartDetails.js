import React, {useState, useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import Shipping from '../layout/Shipping';



function CartDetails(){
    
    let [quantity,setQuantity] =useState(1);
    let [response, setResponse] = useState([]);

    const history = useHistory();

    function handleClick(){
        history.push('/shipping');
    }

    let increase=()=>setQuantity(quantity+1);
       
    let decrease=()=> {
        if(quantity>1)
            setQuantity(quantity-1);
        else
            return false;
    }

    useEffect(() => {
        axios.get('http://localhost:3333/cart').then(result=>{
        setResponse(result.data); 
      })
    },[]);
    
    
return(
<>
   {response.map((resp, index)=>{
       return(<div className='cartItem' key={index}>
                <div className='flex1'>
                    <img className='imgcart' src={resp.Product_image} alt='camera'/>
                </div>
                <div className='flex2'>
                    <div><b><span className='namecart'>{resp.Product_name}</span></b></div>
                    <div className="">
                <i class="minus circle icon customicon" onClick={decrease} ></i>
                <input className='num' type='text' value={quantity}/>
                <i class="plus circle icon customicon" onClick={increase}></i>  
            </div>
            <div className='stock'>{resp.Product_status}</div>
            <div className='delete'>Delete From the cart</div>
        </div>
        <div className='flex3'> <span class='pricecart'> &#x20B9; {resp.Product_price} </span></div>
       </div>
       );
   })
   }
   <button onClick={handleClick} className='checkout ui button' type='button'>Checkout</button>
</>
);
}
export default CartDetails;
