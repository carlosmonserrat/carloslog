import * as React from 'react'
import {border, navLogoGroup, navBar, navLinkGroup, navLinkText} from "./style.module.css";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className={navLogoGroup}>
      <h1>MONSERRAT.DEV</h1>
      </div>
      <nav className={navBar}>
        <div className={navLinkGroup}>
          <Link to="/" className={navLinkText}>
            <div className={border}/>
            Home
          </Link>
          <Link to="/about" className={navLinkText}>
            <div className={border}/>
            About Me
          </Link>
        </div>
      </nav>
    </>

  )
}

export default Navigation