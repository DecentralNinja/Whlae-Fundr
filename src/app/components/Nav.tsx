"use client";
import Image from "next/image";
import React from "react";
import { roboto } from "../layout";



function Nav() {
  return (
    <>
      <section id="nav">
        <Image src="/pic1.png" alt="" width={200} height={50} />
        <div id="navLinks">
          <a href="/Home" className={`link ${roboto.className}`}>How it work <i className="ri-arrow-down-s-line"></i> </a>
          <a href="/FAQ" className={`link ${roboto.className}`}>FAQ </a>
          <a href="/Testemonial" className={`link ${roboto.className}`}>Testimonials</a>
          <a href="/Trading" className={`link ${roboto.className}`}>Trading <i className="ri-arrow-down-s-line"></i></a>
          <a href="/About" className={`link ${roboto.className}`}>About Us <i className="ri-arrow-down-s-line"></i></a>
          <a href="/Academy"className={`link ${roboto.className}`}>Academys</a>
        </div> 
        <div id="navBtn">
          <button className="SearchiconBtn"> <i className="ri-search-line"></i></button>
          <button className="flagIcon"><img src="/pic2.png" alt="" id="flag" /><p className={`${roboto.className}`}>ENG</p><i className="ri-arrow-down-s-line"></i></button>
        </div>
      </section>
    </>
  );
}

export default Nav;
