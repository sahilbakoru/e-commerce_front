//import react from 'react';
import Layout from '../core/Layout'
import {isAuthenticated} from '../auth'
import {Link}  from 'react-router-dom';

const Dashboard =()=>{
        const {user:{_id,name,email,role}}= isAuthenticated()
        const userLink = ()=>{
            return(
                <div className="card">
                    <h4 className="card-header"> User Links </h4>
                <ul className="list-group" >
                   <li className="list-group-item"> 
                    <Link className="nav-link" to="/cart" >My Cart</Link>
                    </li>
                   <li className="list-group-item"> <Link className="nav-link" to="/profile/update" > Update Profile </Link> 
                   </li>        
                </ul>
                </div>
            )
        }

        const userInfo =()=>{
         return   (
                <div className="card mb-5">
               <h3 className="card-header"> User Information </h3>
               <ul className="list-group" >
                   <li className="list-group-item"> {name} </li>
                   <li className="list-group-item"> {email} </li>
                   <li className="list-group-item"> {role === 1? "Admin":"Rigisterd User"} </li>
               </ul>
           </div>
            )
        }
        const purchaseHistory =()=> {
           return (
                <div className="card" >
                <h3 className="card-header"> Purchase history </h3>
                <ul className="list-group" >
                       <li className="list-group-item"> History </li>
                   </ul>
                </div>
            )
        }
    return (
        <Layout title="Dashboard" discription={`Good day ${name} !`} className="container-fluid" >
            <div className="row">
            <div className="col-9" >
                {userInfo()}
                {purchaseHistory()}
            </div>
            <div className="col-3" >
                {userLink()}
            </div>
        </div>   
        </Layout>
    )
}
export default Dashboard