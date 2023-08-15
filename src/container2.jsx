import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import './container2.css';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export const Con2=()=>{
    return(
        <Fragment>
<div id="container2" className="container-fluid">
<h1>At EdYoda,</h1>
<h5>Get real skills, not just degrees!</h5>

<br /> <br /><br /> <br />
<div>
      <Row>
        <Col>
        <img  id="comp3" src="./Component 3.jpg" alt="" />
       
        </Col>
         <br /> <br />
        <Col>
        <div id="grpbtn" className="container">
      <Link> <button id="Learn" className="btn btn-primary">Learn job-focused skills</button></Link> 
      <br /><br /><br />
      <Link> <button id="industry" className="btn btn-primary">Industry accepted Certification</button> </Link> 
<br /><br /><br />
     <Link>   <button id="job" className="btn btn-primary">Job Opportunities</button> </Link><br />
        </div>   </Col>
      </Row>
</div>
<div>
    <Row>
        <Col sm={6}> <div className="usercontainer"> 
            <h1 id="users" className="text-light">300,000+</h1> <br />
            <span id="users1" className="text-light">users</span> <img className="hearten" src="./Group 567.png" alt="" /> 
 <span className="edyoda">EDYODA</span>
        </div>
        </Col>


      


        <Col >
        <div id="ellipse" className="container">
        <img  className="p"    src="./Ellipse 378.jpg" alt="" />
            <img   className="p" src="./Ellipse 381.jpg" alt="" />
            <img   className="p" src="./Ellipse 384.jpg" alt="" />
            <img   className="p"src="./Ellipse 387.jpg" alt="" />
            <img   className="p" src="./Ellipse 390.jpg" alt="" /><br />
 
            <img  className="p" src="./Ellipse 391.jpg" alt="" /> 
            <img className="p" src="./Ellipse 392.jpg" alt="" />
            <img   className="p" src="./Ellipse 393.jpg" alt="" />
            <img  className="p"src="./Ellipse 394.jpg" alt="" /> 
            <img   className="p"src="./Ellipse 395.jpg" alt="" /><br />
            <img   className="p"src="./Ellipse 396.jpg" alt="" />
            <img  className="p"src="./Ellipse 397.jpg" alt="" />
            <img  className="p" src="./Ellipse 398.jpg" alt="" />
            <img  className="p" src="./Ellipse 399.jpg" alt="" />
                       <img   className="p" src="./Ellipse 400.jpg" alt="" />
            </div>
        </Col>
     
    </Row>
</div>
<div>
    <Row>
        <Col>
        <p className="success">" I have secured a high paying job now at Google. I've mugged my dream job as a Data Analyst. The courses helped me so much.
           <br /> would not have been possible without Edyoda."
        </p>
        </Col>
        <Col>
        <div className="samantha1" >  
        
        <br />

        <img  src="./Ellipse 401.jpg" alt="" />
        <h3 className="samantha ">SAMANTHA</h3>  <br />
        <h5 id="analyist"> Data Analyist.Google</h5></div></Col>
    </Row>
</div>
<div id="threedot1" className="d-flex">
<span id="threedot">. {""}  </span> <span id="threedot">. {""}  </span> <span id="threedot">. {""}  </span>
</div>  </div>
        </Fragment>
    )
}
export default Con2;