import React from "react";
import { Fragment } from "react";
import Navs from "./Nav";
import Con1 from "./container1";
import Con2 from "./container2";
import './navbar.css';
import Con3 from "./container3";
import Con4 from "./container4";
import End from "./Endcontainer";

export const Home=()=>{
    return(
        <Fragment>
        <div id='container1' className='container-fluid'>
                  <Navs/>
<Con1/>

 <Con2/>
 <Con3/>
 <Con4/>
 <End/>
        </div>
    
        </Fragment>
    )
}