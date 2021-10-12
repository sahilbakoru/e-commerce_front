import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from '../auth'

const isActive =(history,path)=>{
    if(history.location.pathname === path){
        return {color: '#02D64FF'};  // (blue) coror nav page on. 
    } else {
        return {color: '#000000'};  // (black) color nav page not on. 
    }
}

const Menu =({history})=>(
    <div>
        <ul className="nav nav-tabs bg-light">
            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/')} to="/"> Home 
                </Link>
            </li>

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