import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout'
import { signin,authenticate, isAuthenticated } from '../auth'
import Menu from '../core/Menu';


const Signin = () => {
    const [values,setValues]=useState({ 
        
        email: 'sahilbakoru@gmail.com',
        password: '123abc',
        error: '',
        loading: false,
        redirectToReferrer: false,

    })

    const {email,password,loading,error,redirectToReferrer} = values
    const {user}= isAuthenticated()
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const clickSubmit=(event)=>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,loading:false})
            }
            else{
                authenticate(data,()=>{
                        setValues({...values,
                            redirectToReferrer:true
                            })
                    }
                )
            }
        })
    }

    const signUpForm =()=>(

         
    //          <div className="row"style={{placeItems:"center",margin:"4%"}}>
    //       <div className="col">
    //     <div className="card"style={{border:"white",placeItems:"center"}}>
    //     <div className="card-body">
    //     <video loop={true} autoPlay={true} muted={true} style={{height:"15rex",width:"15rex"}} >
    //      <source src='signin.mp4' type="video/mp4" />
    //    </video>
    //    </div>
    //    </div>
    //    </div>

       
       <form style={{margin:"30%"}}>
       <div className="row">
       <div className="col">
       <div className="card"style={{border:"white"}} >
       <div className="card-body">
       {/* <video loop={true} autoPlay={true} muted={true} style={{height:"100%",width:"100%"}} >
         <source src='signin.mp4' type="video/mp4" />
       </video> */}
          <div className="form-group"> 
                <label className="text-muted"> Email </label>
                <input onChange={handleChange('email')} type="email" 
                className="form-control form-control-lg" value={email}/>
            </div>

            <div className="form-group"> 
                <label className="text-muted"> Password </label>
                <input onChange={handleChange('password')} type="password" 
                className="form-control form-control-lg" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-danger btn-lg btn-block ">Submit</button>
            </div>
      </div>
      </div>
      </div>
      </form>
    //   </div>

       
       
        
    )

    const showError=()=>(
        <div className="alert alert-danger" style={{display:error ? '':'none'}}>
        {error}
    </div>
    )

    const showLoading=()=>
       loading &&(
           <div className="alert alert-info" >
               <h2>
                   Loading..
               </h2>
           </div>
       )

       const redirectUser=()=>{
           if(redirectToReferrer){
               if(user && user.role === 1){
                   return <Redirect to="/admin/dashboard" />;
               } else {
                   return <Redirect to="/user/dashboard" />;
               }
           }
           if (isAuthenticated()){ 
               return <Redirect to="/"/>
           }
       }

    return (
        <div>
        <Menu/>
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
           
        </div>
     )
}

export default Signin