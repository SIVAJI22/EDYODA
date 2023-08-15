import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import "./container3.css";

import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
export const  Con3=()=>{
    return(
        <Fragment>
            <div  className="  container3 container-fluid">

     
<div>
<Row>
    <Col sm={9}>
    <div>
    <h1 className="Courses">Courses to get you Job Ready</h1>
    <h5 className="Access text-muted">Access 100+ courses worth <strike>INR 1,00,000  </strike> {""} at $0</h5>
    </div>
    </Col>

    <Col>
    <img id="bb8" src="./bb8-new 1.png" alt="" />
    </Col>
</Row></div><br /> <br /> 
<Link><span className="viewall">VIEW ALL</span></Link>
 <br /> <br />
<div>
<Row>

    <Col>
<div  className="Categories container d-flex flex-column" >
    <span>Categories</span>
    <br /> <span id="hr">_________________________________</span>

    <a href="">
<button id="artific" className="btn btn-primary">Artificial Intelligence</button>
    </a>
    <a href="">
Web development
    </a>
    <a href="">
        Programming Language
        </a>
        <a href="">
        Data Structure & Algorithms
        </a>
        <a href="">
        Interview Preparation
        </a>
        <a href="">
        Database
        </a>
        <a href="">
        Operating System
        </a>
        <a href="">
        Mobile Application Development
        </a>
        <a href="">
        cloud Computing
        </a>
        <a href="">
        DevOps
        </a>
        <a href="">
        Testing & Automation
        </a>
        <a href="">
        Others
        </a>
</div>

    </Col>
    <Col sm={8}>
    <div id="group"> 
    <Link>    <img src="./Group 560.png" alt="" />
    </Link>
    <Link>  <img src="./Group 561.png" alt="" />
    </Link>
    <Link> <img src="./Group 562.png" alt="" />
    </Link>
    <Link>       
        <img src="./Group 563.png" alt="" />
    </Link>
    <Link> <img src="./Group 564.png" alt="" />
    </Link>
    <Link>    <img src="./Group 565.png" alt="" />
    </Link>
    {/* <Link>   <img src="./Group 567.png" alt="" />
    </Link> */}
      

       
    
     
    </div>
    </Col>
</Row>
</div> 
</div>
        </Fragment>
    )
}
export default Con3;