import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./container4.css";
import { Link } from "react-router-dom";

export const Con4=()=>{
    return(
        <Fragment>
            <div className="container-fluid">
<div id="container4" className="container-fluid">

    <div id="EDYODA">
        <h1>EdYoda Digital University</h1>
        <h5>Experience the future of education</h5>
    </div>
    <br />
    <div id="LIVE" className="container">
<div >     <Row>
        <Col>  
        <div className="Live"   >
         <Link>
         <span>LIVE SESSIONS</span>
            
            <img src="./Live.png" alt="" />  
         </Link>   </div> 
        </Col>
        <Col>  <div className="bussiness">
        <Link>
        <img src="./bussiness.png" alt="" /> 
        <span>100% ASSURED <br />
         JOB OPPORTUNITITES.</span>
         </Link>   
          
            </div>
        </Col>
    </Row></div>
<div >
        <Row>

        <Col> <div className="Group1">
            
        <Link>
        <img src="./Group.png" alt="" />
<span>
    STUDENT COMMUNITY
</span>
       
         </Link>   
 
            </div>
        </Col>
        <Col>
        <div className="Certifi">     <Link>
        <span>CERTIFICATIONS</span>
        <img src="./Certification.png" alt="" />
         </Link>   
        </div>
       
        </Col>
    </Row>
</div>
<div >
        <Row>
        <Col>
        <div className="Gaming">
        <Link>
        <span>GAMIFIED LEARNING <br /> EXPERIENCE</span>
        <img src="./Gaming.png" alt="" />
         </Link>    
            </div>
        </Col>
        <Col>
        <div className="steup">     <Link>
        <img src="./Setup-cuate 1.png" alt="" />
        <span>CLASSROOM ACCESS</span>
         </Link>   
       
        </div>
       
        </Col>
    </Row>
</div>
<br /> <br /> <br />
<div className="explore">

    <h2 className="text-light">EXPLORE Our 100% Job Assured Programs</h2> <br /> <br /> <br />
    <Row>
        <Col> <div id="tech" className="container">
        <h3>Tech Programs</h3>
        <Link><li>FullStack Developer</li></Link>
<Link><li> Data Scientist</li></Link>
<Link>
<button className="btn btn-primary">JOIN Now</button></Link>

    </div>
        </Col>
        <Col>
        <div id="digital" className="container">

            <h3>Business Program</h3>
          <Link>  <li>Digital Marketing</li>
          </Link>
           <Link><li>Customer Support</li>
           </Link> 
            <Link>
<button className="btn btn-primary">JOIN Now</button></Link>
        </div>
        </Col>
    </Row>
   
</div></div>
<h5 id="Join">Join EdYoda Digital University Today</h5>
</div>
<img id="screen" src="./screen.png" alt="" /></div>
        </Fragment>
    )
}
export default Con4;