"use client";
import Image from "next/image";
import React from "react";



function Nav() {
  return (
    <>
      <section id="nav">
        <Image src="/pic1.png" alt="" width={200} height={50} />
        <div id="navLinks">
          <a href="/Home" className={`link`}>How it work <i className="ri-arrow-down-s-line"></i> </a>
          <a href="/FAQ" className={`link`}>FAQ </a>
          <a href="/Testemonial" className={`link`}>Testimonials</a>
          <a href="/Trading" className={`link`}>Trading <i className="ri-arrow-down-s-line"></i></a>
          <a href="/About" className={`link`}>About Us <i className="ri-arrow-down-s-line"></i></a>
          <a href="/Academy"className={`link`}>Academys</a>
        </div> 
        <div id="navBtn">
          <button className="SearchiconBtn"> <i className="ri-search-line"></i></button>
          <button className="flagIcon"><img src="/pic2.png" alt="" id="flag" /><p >ENG</p><i className="ri-arrow-down-s-line"></i></button>
        </div>
      </section>
    </>
  );
}

export default Nav;
