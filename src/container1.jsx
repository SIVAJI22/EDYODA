import React from "react";
import { Fragment } from "react";
import './container1.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Con1=()=>{
    return(
<Fragment>
<div>
    <Row>
        <Col>


        <div id="learn" className="container">
    <h3 id="learn1">Learn Skills, Get Jobs</h3>
    <h5 id="anytime">Anytime. Anywhere. At zero cost.</h5>

    <button id="view" className='btn'> VIEW COURSES</button>
<button  id='join' className="btn btn-primary">JOIN NOW</button>

    </div>
        </Col>
        <Col>

        <div>
            <img src="./Component 2.jpg" alt="" />
        </div>
        </Col>
    </Row>
</div>
  
    <div id='companies'  className="container">
    <img id="comp" src="./Component 1.jpg" alt="" />

    </div>
</Fragment>
    )
}
export default Con1;