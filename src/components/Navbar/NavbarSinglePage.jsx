import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import LOGO from "../../assests/main-logo.png";
import { NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const NavbarSinglePage = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [show, setShow] = useState(false);
  const [menuOPened, setMenuOpened] = useState(false);
  const ulRef = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const showNavbar = (e) => {
    setMenuOpened(!menuOPened);
    // if (e.target.classList.contains("hamburg-menu")) {
    //   setMenuOpened(false);
    // }
    // if (e.target.classList.contains("mob-menu")) {
    //   setMenuOpened(false);
    // }
    // if (e.target.classList.contains("hamberg-menuu")) {
    //   setMenuOpened(false);
    // } else {
    //   setMenuOpened(true);
    // }
  };

  const closeNav = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        setMenuOpened(false);
      }
    },
  });
  // const outsideClick = (e) => {
  //   if (e.target.classList.contains("n-right")) {
  //     setMenuOpened(true);
  //   } else {
  //     setMenuOpened(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("click", outsideClick, true);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div
      className={
        show ? "wh-wrapper active-nav " : "wh-wrapper single-nav-wrapper"
      }
      style={{
        backgroundColor: "#455a64",
        position: "fixed",
        zIndex: 99999,
        transition: " 0.3s linear",
      }}
    >
      <div className={"single-nav-section wrapper"}>
        <NavLink to="/" className="n-left">
          <img className="nav-logo" src={LOGO} alt="logo" />
        </NavLink>
        <div className="mob-menu" onClick={showNavbar}>
          <div
            className={
              menuOPened ? "hamburg-menu clicked" : "hamburg-menu unclicked"
            }
          >
            <div className="hamberg-menuu"></div>
            <div className="hamberg-menuu"></div>
            <div className="hamberg-menuu"></div>
          </div>
        </div>
        <div
          className={menuOPened ? "n-right menu-open" : "n-right"}
          ref={ulRef}
        >
          <ul {...closeNav} className="menu-links">
            <li onClick={() => setMenuOpened(false)} className="menu-logo">
              <img src={LOGO} alt="" />
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="/"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="/"
              >
                work process
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="/"
              >
                our work
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setMenuOpened(false)}
                className="menu-link"
                to="/"
              >
                services
              </NavLink>
            </li>
            <li>
              <Link
                onClick={() => {setMenuOpened(false);setActiveNav("#contact")}}
                className={
                  activeNav === "#contact" ? "menu-link active" : "menu-link"
                }
                to="contact"
                spy={true}
                smooth={true}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarSinglePage;
