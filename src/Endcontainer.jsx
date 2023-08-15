import React from "react";
import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./End.css"
export const End=()=>{
    return(
<Fragment>
    <div id="End" className="container-fluid">
        <Row>
            <Col>
            <div id="EDYODA" className="container d-flex flex-column  " >
                <h3>
                    EDYODA
                </h3>
                <a  id="  EDYODA" href="">  About Us</a>
                <a href="">Contact Us</a>
                <a href="">Terms of Use</a>
                <a href="">Privacy Policy</a>
             
            </div>
            </Col>
            <Col>
            <div id="EDYODA" className="container d-flex flex-column  "  >
                <h3>
                    RESOURCES
                </h3>
                <a href="">
Learning Paths
                </a>
                <a href="">
                  Courses  
                    </a>
                    <a href="">
                    Learning Videos
                    </a>
                    <a href="">
                Educators    
                    </a>
                    <a href="">
                EdYoda Stories
                    </a>
                    <a href="">
                University
                    </a>
                    
                    
                    

            </div>
            </Col>
            <Col>
            <div id="EDYODA" className="container d-flex flex-column  " >
                <h3>
                    FOR ENTERPRISES
                </h3>
                <a href="">Train Your Employees

                </a>
                <h3 href="">
                    QUICK LINKS
                    </h3>
                    <a href="">
                    Learn and Earn
                    </a>
                    <a href="">
                    Become a Learning-Enabler
                    </a>
                    <a href="">
                    Tips for Learning-Enabler
                    </a>
            </div>
            
            </Col>
            <Col>
<div className="connect">
<h3>CONNECT</h3>
<p>2nd Floor #188, Survey No.-123/1,
    Includes Building Next to McDonalds,
    ITPL Main Rd, Brookefield, Bengaluru, Karnataka-560037,
   <br /> India
</p>
<span>hello@edyoda.com</span>
</div>

            </Col>
        </Row>
        
    </div>
</Fragment>
    )
}
export default End;