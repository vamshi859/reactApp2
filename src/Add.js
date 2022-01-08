import React from 'react'
import {Link} from 'react-router-dom'
import Show from './Show'
const Add = () =>
{
  return (
    <div className='container'>
      <div style={{float:"right"}}>
        <button className='btn btn-primary'><Link to={'/form'}><span style={{color:"white"}}>Add</span></Link></button>
      </div><br /><br /><br />
      <Show />
    </div>
  )
}

export default Add;