import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from '../auth'
import Search from './Search'

const isActive =(history,path)=>{
    if(history.location.pathname === path){
        return {color: '#02D64FF'};  // (blue) coror nav page on. 
    } else {
        return {color: '#000000'};  // (black) color nav page not on. 
    }
}

const Menu =({history})=>(
    <div >
        <ul className="nav nav-tabs bg-light">
        {/* <img  src="https://files.porsche.com/filestore/image/multimedia/none/exclusive-911carrara4s-1-banner-01/normal/00146f4f-7e23-11ea-80c9-005056bbdc38/porsche-normal.jpg"  style={{hieght:"100px", width:"100px" , marginRight:"500px"} } /> */}
       
      
            
            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/')} to="/"> Home 
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/shop')} to="/shop"> Shop 
                </Link>
            </li>
            
            {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                <li className="nav-item">
                    <Link className="nav-link" style= {isActive(history,'/user/dashboard')} to="/user/dashboard"> Dashboard 
                    </Link>
                </li>
            )}
             
            {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                <li className="nav-item">
                    <Link className="nav-link" style= {isActive(history,'/admin/dashboard')} to="/admin/dashboard"> Dashboard 
                    </Link>
                </li>
                
            )}
 <Search/>
           {!isAuthenticated() && (
               <Fragment>
                    <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/signin')} to="/signin"> Signin 
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/signup')} to="/signup"> Signup 
                </Link>
            </li>
           
              </Fragment>
           )}

          {isAuthenticated() && (
            <li className="nav-item">
                <span 
                 className="nav-link" style= {{curser:'pointer',color:'ffffff'}} 
                 onClick={()=>signout(()=>{
                    history.push("/")
                 })}> Signout 
                </span>
            </li>
          )}

</ul>
        
    </div>
)

export default withRouter(Menu)