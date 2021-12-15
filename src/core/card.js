import React from 'react'
import {Link} from 'react-router-dom'
import ShowImage from './showImage'
import '../styles.css'


const Card=({product})=>{
    return(
      <Link to={`/product/${product._id}`} >

<div>
{/* <div>
      <div className='col-12 mb-3'>
      <div className='card'>
        <div className='card-header'>{product.name}</div>
        <div className='card-body'></div>
        <ShowImage item={product} url="product" />
        <p className="card-text" style={{marginLeft:"20px",fontWeight:"900"}}> {product.name}</p>
    <p className="card-text" style={{marginLeft:"20px"}}> {product.description.substring(0,100)}</p>
    <p className="card-text" style={{marginLeft:"18px",fontWeight:"100 ", color:"red"}} > ₹ {product.price}</p>
    <p className='card-body'> Category: { product.category && product.category.name} </p>
        <Link to={`/product/${product._id}`}>
            <button className=' btn btn-outline-primary mt-2 mb-2'>View Product</button>
        </Link>
        <button className='btn btn-outline-warning mt-2 mb-2'>Add to cart</button>
        
      </div>
  </div> */}
  

 <div class="row-sm">
<div class="col-sm mb-2 ml-2 mr-2" >
  <div class="card"  >
    <div class="card-body">
    <ShowImage item={product} url="product" />
    <p className="card-text" style={{marginLeft:"20px",fontWeight:"900" ,color:"black"}}> {product.name}</p>
    <p className="card-text" style={{marginLeft:"20px",color:"black"}}> {product.description.substring(0,100)}</p>
    <p className="card-text" style={{marginLeft:"18px",fontWeight:"100 ",color:"black"}} > ₹ {product.price}</p>
    <p className='card-text'  style={{marginLeft:"18px",color:"black"}} >Category:{ product.category && product.category.name} </p>
    <Link to="/" className='btn btn mt-1' style={{marginLeft:"25%"}} >Add to cart</Link>
    </div>
  </div>
</div>
</div>

</div>
</Link>
    )
}

export default Card