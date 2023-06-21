import React from "react";
import "./Services.css";
import Service from "./Service";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="wh-wrapper" style={{backgroundColor: '#8e3ccb'}}>
      <div className="service-section wrapper" id="services">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={transition}
        className="service-title"
      >
        our services
        <div className="service-underline">
          <hr className="service-line" />
          <div className="service-circle"></div>
        </div>
      </motion.div>
      <div className="service-contents">
        {Service.map(({ title, content, id }) => {
          return (
            <div key={id} className="service-content">
              <div className="content-title">{title}</div>
              <hr className="service-content-line" />
              <div className="content-para">{content}</div>
            </div>
          );
        })}
      </div>
      <div className="service-background">Services</div>
    </div>
    </div>
  );
};

export default Services;
