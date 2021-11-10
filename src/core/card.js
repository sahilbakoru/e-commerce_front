import React from 'react'
import {Link} from 'react-router-dom'
import ShowImage from './showImage'
import '../styles.css'



const Card=({product})=>{
    return(
    
<div class="row">
<div class="col-sm">
  <div class="card" style={{margin:"20px",border:"white"}} >
    <div class="card-body">
    <ShowImage item={product} url="product" />
    <p className="card-text" style={{marginLeft:"20px",fontWeight:"900"}}> {product.name}</p>
    <p className="card-text" style={{marginLeft:"20px"}}> {product.description.substring(0,100)}</p>
    <p className="card-text" style={{marginLeft:"18px",fontWeight:"100 "}} > Rs {product.price}</p>
    <Link to="/" className='btn btn-danger'style={{margin:"15px"}}>View Product</Link>
    <Link to="/" className='btn btn mt-1' style={{margin:"7px"}} >Add to cart</Link>

    </div>
  </div>
</div>
</div>

        

    )
}

export default Card