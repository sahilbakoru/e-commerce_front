import React from 'react'
import {Link} from 'react-router-dom'
import ShowImage from './showImage'
import '../styles.css'



const Card=({product})=>{
    return(

<div  className="ml-4">
        <div className='col-4 mb-6'>
        <div className='card'>
          <div className='card-header'>{product.name}</div>
         
          <div className='card-body'></div>
          <ShowImage item={product} url="product"  />  
          <p className='card-header'>Category:{ product.category && product.category.name} </p>
          <p className="card-text" > {product.name}</p>
          <p className="card-text" > {product.description.substring(0,100)}</p>
          <p className="card-text"  > Rs {product.price}</p>
          
          
          <button className='btn btn-outline-warning mt-2 mb-2'>Add to cart</button>
          
        </div>
     </div>

     </div>
    


        

    )
}

export default Card