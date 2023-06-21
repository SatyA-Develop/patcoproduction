import React, { Component } from "react";
import "./Clients.css";
import client1 from "./ClientLogo1";
import client2 from "./ClientLogo2";
import { motion } from 'framer-motion';

export default class Clients extends Component {
  render() {


    const transition = { type: 'spring', duration: 3}
    return (
      <div className="wh-wrapper" style={{backgroundColor: '#8E3CCB'}}>
        <div className="client-section wrapper">
        <motion.div
        initial={{x: "-100%"}}
        whileInView={{x: "0"}}
        transition={transition}
        className="client-title">
          Clients
          <div className="client-underline">
            <hr className="client-line" />
            <div className="client-circle"></div>
          </div>
        </motion.div>
   

        <div className="logos-container">
<div className="logos-slide1">
{
              client1.map(({clientLogo1, id})=>{
                return(
                 <>
                  <img className="logo-cls" src={clientLogo1} alt=""  />
                 </>
                )
              })
            }
</div>
<div className="logos-slide1">
{
              client1.map(({clientLogo1, id})=>{
                return(
                 <>
                  <img className="logo-cls" src={clientLogo1} alt=""  />
                 </>
                )
              })
            }
</div>
        </div>
        <div className="logos-container">
<div className="logos-slide2">
{
              client2.map(({clientLogo2, id})=>{
                return(
                 <>
                  <img className="logo-cls" src={clientLogo2} alt=""  />
                 </>
                )
              })
            }
</div>
<div className="logos-slide2">
{
              client2.map(({clientLogo2, id})=>{
                return(
                 <>
                  <img className="logo-cls" src={clientLogo2} alt=""  />
                 </>
                )
              })
            }
</div>
        </div>
      </div>
      </div>
    );
  }
}
