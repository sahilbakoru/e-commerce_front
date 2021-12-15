import React,{useState,useEffect} from "react";
import Layout from "./Layout";
import {getProducts} from './apiCore'
import Card from './card'
import "../styles.css"
import Search from './Search'
import Menu from "./Menu";


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
     
    <div>
      
<Menu/>


      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
 
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/264061757_10159405266066970_5855602353457459729_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=cSBWVLcHSmMAX8Rcwfg&_nc_ht=scontent.fixc8-2.fna&oh=00_AT-a63WQzmAjDwFYkEo-kFp7uqattonmNsHM8AhfIkouhQ&oe=61BDD458" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://files.porsche.com/filestore/image/multimedia/none/rd-2015-christophorus-issue374-article01-banner/normal/ab10b053-823d-11e5-b99f-0019999cd470/porsche-normal.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://files.porsche.com/filestore/image/multimedia/none/sct-explorethehistory-banner01/normal/7c7bd2a7-7156-11e9-80c4-005056bbdc38/porsche-normal.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden=""></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>







      <h2 className='mb-4 ' style={{margin:"50px"}}>Best Sellers</h2>
      <div className='row'>
      {productsBySell.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>

      <h2 className='mb-4 ' style={{margin:"50px"}} >New Arrivals</h2>
      <div className='row'>
      {productsByArrival.map((product,i)=>(
        <Card key={i} product={product}/>
      ))}
      </div>

{/* comment */}


<br/>
<br/>
<br/>
      <div class="about-section">
  <h1>About Us</h1>
  <br/>
  <h5>Established in year 2015 "SAT SOLAR ENGERY,KARNAL" is a leading distributor & wholeseller of a wide range of products such as Solar Lighting Systems, Solar Inverters and hybrid UPS, Solar Photovoltic modules, Solar Batteries, Automtive and Home Inverter Batteries, Home Inverters etc. We also provide Solar Power Plant Installations.</h5>
  <br/>
<h5>We provide products of brands like EXIDE, EASY SOLAR, Stateon etc. wchich have excellent performance, energy saving and high efficiency at competitive and affordable prices.</h5>
<br/>
  <h5>Our organisation is led by proprietor Mr. Satpal Mittal with managing director Mr. Madhukar Mittal.</h5>
</div>
<br/>
<br/>
<br/>

{/* comment */}
<br/>
<br/>
<br/>
<div class="container mt-4 contact-style" id="contactid" ></div>
  <div class="row"></div>
    <div class="col-md-10 col-12 mx-auto"  ></div>
      <h1 class="text-center main-heading">Contact Us</h1>
      <h4 class="text-center sub-heading">
        we will be happy to help you
      </h4>
     <div class="row"></div>
    <div class="col-md-10 col-12 mx-auto"  ></div>
    
<form action="/" method="POST" style={{marginLeft:"15%",marginRight:"15%"}} >
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

  <button type="submit"  class="btn" style={{marginLeft:"44%", color:"red"}}>Submit</button>
  <p></p>
  <p></p>
</form>
<br/>
<br/>
<br/>
{/* fotter */}

<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Sat Solar Energy</h6>
            <p class="text-justify"></p>
          </div>

   

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#about-section">About Us</a></li>
              <li><a href="#services-section">Services</a></li>
              <li><a href="#contact-section">Contact Us</a></li>
              <li><a href="#home-section">Home</a></li>
              
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 Designed and Developed by 
         <a href="https://www.appformers.com/"><b> <u>  <span>Appformers</span>  </u></b></a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/Diwakar-Singh-589810304868539"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://www.instagram.com/diwakar_classes/"><i class="fa fa-instagram"></i></a></li>  
            </ul>
          </div>
        </div>
      </div>
</footer>


{/* fotter */}

    </div>
    
  );
}

export default Home;