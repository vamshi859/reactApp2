import React, { useState } from 'react';
import './styles.css';

var adetails = localStorage.getItem('details')
if(adetails)
{
  adetails = JSON.parse(adetails)
}
else
{
  adetails = [];
}
const Form = () =>
{
  
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [check,setCheck] = useState(false)
 
  const onSubmit = (e) =>
  {
    if(email.length===0 || name.length===0 || price.length===0)
    {
      alert("Please fill all details");
    }
    e.preventDefault();
    console.log(email,name,price,check);
    const details = {
      email : email,
      name : name,
      price : Number(price),
      check : check
    }
    adetails.push(details)
    localStorage.setItem('details',JSON.stringify(adetails));

  }
  return (
    <div>
      <div className='form'>
        <div className='bg-secondary'>
          <form onSubmit={onSubmit} className='m-3'>
            <div className='form-group'>
              <span style={{fontSize:"20px",color:"white"}}>Email:</span><input type="email" className='form-control' placeholder='Enter email'  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
              <span style={{fontSize:"20px",color:"white"}}>Full name:</span>
              <input type="text" className='form-control' placeholder='Enter full name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-group'>
              <span style={{fontSize:"20px",color:"white"}}>Price:</span><input type="number" className="form-control" placeholder="Enter price"  onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
              <span style={{fontSize:"20px",color:"white"}}>Active status:</span><input type="checkbox" onChange={(e) => setCheck(e.target.checked)} ></input>
            </div>
            <div className='form-group'>
              <button className='form-control btn btn-primary'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;