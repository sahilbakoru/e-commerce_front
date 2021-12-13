import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import {read, listRelated } from './apiCore';
import Card from './cardProduct';

const Product = props => {

    const [product, setProduct] = useState({});
   // const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProduct(data)

                // fetch related products

                // listRelated(data._id).then(data => {
                //     if(data.error){
                //         setError(data.error)
                //     } else {
                //         setRelatedProduct(data)
                //     }
                // })
            }
        })
    }

    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [])

    return (
        <Layout title={product.name} discription={ product.description &&  product.description.substring(0, 100)} className='container-fluid'>

          <div classNmae="row"> {product.description && 
             <Card   product={product} />} 
             
             </div>
        </Layout>
    )
}

export default Product;