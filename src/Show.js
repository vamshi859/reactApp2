import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Add from './Add';
const Show = ()=>
{
  var data = localStorage.getItem('details')
  var details = JSON.parse(data);
  var [email,setEmail] = useState("");
  var [name,setName] = useState("");
  var [price,setPrice] = useState("")

  var detail = details.map((ele) => {
    // console.log(ele);
    return (
      <div className='container mt-2' key={ele.key}>
        <div className='col-12 border border-secondary m-1'>
          <div className='row' style={{display:"flex",justifyContent:"space-between"}}>
            <div className='col-5'>
              <p>Email:{ele.email}</p>
              <p>Full name:{ele.name}</p>
            </div>
            <div className='col-5'>
              <p>Price:{ele.price}</p>
              <button className='btn btn-primary' data-toggle="modal" data-target={'#'+ele.key}>Edit</button>
              {/* <!-- The Modal --> */}
              <div className="modal fade" id={ele.key} >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                  
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                      <h4 className="modal-title">Details</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                      {/* Form */}
                      <form className='m-1'>
                          <div className='form-group'>
                            <span style={{fontSize:"20px",color:"black"}}>Email:</span><input type="email" defaultValue={ele.email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter email'/>
                          </div>
                          <div className='form-group'>
                            <span style={{fontSize:"20px",color:"black"}}>Full name:</span>
                            <input type="text" defaultValue={ele.name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter full name'/>
                          </div>
                          <div className='form-group'>
                            <span style={{fontSize:"20px",color:"black"}}>Price:</span><input type="number" defaultValue={ele.price} onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter price"/>
                          </div>
                          <div className='form-group'>
                            <button type="button" className='form-control btn btn-primary' data-dismiss="modal" onClick={()=>{
                                // console.log(ele.key);
                                switch(email)
                                {
                                  case '':email = ele.email;
                                          break;
                                  case email:email=email;
                                          break;
                                }
                                switch(name)
                                {
                                  case '':name = ele.name;
                                          break;
                                  case name:name=name;
                                          break;
                                }
                                switch(price)
                                {
                                  case '':price = ele.price;
                                          break;
                                  case price:price=Number(price);
                                          break;
                                }
                                console.log(email)
                                console.log(name)
                                console.log(price)
                                var item = details.map((el)=>{
                                    if(el.key===ele.key)
                                    {
                                      return {...el,email:email,name:name,price:price}
                                    }
                                    return el
                                  })
                                  localStorage.setItem('details',JSON.stringify(item))
                                  window.location.reload(false)
                               
                                }} ><span style={{color:"white"}} >Edit</span></button>
                          </div>
                       </form>
                      {/*-------*/}
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return detail;
}

export default Show;