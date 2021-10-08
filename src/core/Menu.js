import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const isActive =(history,path)=>{
    if(history.location.pathname === path){
        return {color: '#0000FF'};   // (blue) coror nav page on. 
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

            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/signin')} to="/signin"> Signin 
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" style= {isActive(history,'/signup')} to="/signup"> Signup 
                </Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Menu)