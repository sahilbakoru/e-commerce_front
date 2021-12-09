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
      <h2 className='mb-4 ' style={{margin:"50px"}}>Best Sellers</h2>
      <div className='row'>
      {productsBySell.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>
      <div class="about-section">
  <h1>About Us</h1>
  <br/>
  <h5>Established in year 2015 "SAT SOLAR ENGERY,KARNAL" is a leading distributor & wholeseller of a wide range of products such as Solar Lighting Systems, Solar Inverters and hybrid UPS, Solar Photovoltic modules, Solar Batteries, Automtive and Home Inverter Batteries, Home Inverters etc. We also provide Solar Power Plant Installations.</h5>
  <br/>
<h5>We provide products of brands like EXIDE, EASY SOLAR, Stateon etc. wchich have excellent performance, energy saving and high efficiency at competitive and affordable prices.</h5>
<br/>
  <h5>Our organisation is led by proprietor Mr. Satpal Mittal with managing director Mr. Madhukar Mittal.</h5>

</div>
      <h2 className='mb-4 ' style={{margin:"50px"}} >New Arrivals</h2>
      <div className='row'>
      {productsByArrival.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>

{/* comment */}
<div class="container mt-6 contact-style" id="contactid"></div>
  <div class="row"></div>.
    <div class="col-md-10 col-12 mx-auto"></div>
      <h1 class="text-center main-heading">Contact</h1>
      <h4 class="text-center sub-heading">
        we will be happy to help you
      </h4>
     <div class="row"></div>
    <div class="col-md-10 col-12 mx-auto"></div>


<form action="/" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="InputnName1" placeholder="Full Name"
     name="name"  />
    </div>

   <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" name="email" / >
   
  </div>

   
     <div class="form-group">
    <label for="message">Message</label>
    <input type="text" class="form-control" id="message1" placeholder="Message"
     name="message"  />
    </div>

  <button type="submit"  class="btn " style={{marginLeft:"50%", marginRight:"50%" , color:"red"}}>Submit</button>
  <p></p>
  <p></p>
</form>

    </Layout>
    
  );
}

export default Home;