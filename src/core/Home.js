import React,{useState,useEffect} from "react";
import Layout from "./Layout";
import {getProducts} from './apiCore'
import Card from './card'
import "../styles.css"
import Search from './Search'


const Home = () => {
  const [productsBySell, setproductsBySell]=useState([])
  const [productsByArrival, setproductsByArrival]=useState([])
  const [error, seterror]=useState(false)

  const loadProductBySell=()=>{
    getProducts('sold').then(data=>{
      if(data.error){
        seterror(data.error)
      }else{
        setproductsBySell(data)
      }
    })
  }

  const loadProductByArrival=()=>{
    getProducts('createdAt').then(data=>{
      if(data.error){
        seterror(data.error)
      }else{
        setproductsByArrival(data)
      }
    })
  }

  useEffect(()=>{
    loadProductByArrival()
    loadProductBySell()
  },[])

  return(
     
    <Layout title="Home page" description="Node React App" className='container-fluid'>
      <Search/>
      <h2 className='mb-4 '>Best Sellers</h2>
      <div className='row'>
      {productsBySell.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>
      <h2 className='mb-4 '>New Arrivals</h2>
      <div className='row'>
      {productsByArrival.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>
    </Layout>
    
  );
}

export default Home;