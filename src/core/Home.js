import React from 'react';
import Layout from './Layout' 


const Home = () => {
    const signUpForm =()=>(
        <form>
            <div className="form-group"> 
                <label className="text-muted"> Name </label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group"> 
                <label className="text-muted"> Email </label>
                <input type="email" className="form-control"/>
            </div>

            <div className="form-group"> 
                <label className="text-muted"> Password </label>
                <input type="password" className="form-control"/>
            </div>
           
        </form>
    )


    return (
        <Layout title="Home page " discription ="node react e_commerce app" >
            {signUpForm()}
        </Layout>
     )
}
export default Home