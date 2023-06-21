import React, { useEffect, useState } from "react";
import "./CatagorisedWork.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarSinglePage from "../Navbar/NavbarSinglePage";

const CatagorisedWork = () => {
  const { category } = useParams();
  const [singleData, setSingleData] = useState([]);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0);

    axios
      .get(
        `https://patcoapi-production.up.railway.app/api/products?category=${category}`
      )
      .then((res) => {
        setSingleData(res.data.myData[0].links);
      });
      setLoading(false)
  }, [category]);

  return (
    <>
      
      <NavbarSinglePage />
      <div className="wh-wrapper" style={{backgroundColor :'#455A64'}} >
      <div className="catagorised-section wrapper">
        <div className="single-work-title">
          our work-{category}
          <div className="single-work-underline">
            <hr className="single-work-line" />
            <div className="single-work-circle"></div>
          </div>
        </div>
        <div className="single-work-container" style={(loading) ? { minHeight: '80vh'} : {minHeight : '45vh'}}>
          {singleData.map((post) => {
            return (
              <iframe
                className="youtube-video-container"
                src={`${post}?rel=0&showInfo=0`}
                title="YouTube video player"
                frameborder="0"
                loading="eager lazy"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullscreen
              ></iframe>
            );
          })}
        </div>
        <div className="single-work-bg">our work</div>
      </div>
      </div>
    </>
  );
};

export default CatagorisedWork;
