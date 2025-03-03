import React from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
    <section id="forCenter">
    <section id="HeroContent">
        <Nav/>
        <HeroSection/>
        <Image src={'/pic3.png'} alt='' height={626} width={535} id='image'/>
      </section>
    </section>
    </>
  );
};

export default Header;
