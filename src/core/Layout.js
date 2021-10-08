import React from 'react';
import Menu from './Menu';

const Layout = ({title="Title",discription="Description",children,className}) => 
(

<div>
    <Menu/>
   <div className="jumbotron">
     <h2> {title} </h2>
     <p className="lead" >{discription}</p>
   </div>
        <div className={className}>
           {children}
        </div>
</div>

)

export default Layout