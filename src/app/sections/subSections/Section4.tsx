import React from "react";
import Image from "next/image";
import { montserrat,roboto } from "@/app/layout";
import ArrowBtn from "@/app/components/ArrowBtn";


function Section4() {
  return (
    <section id="section4">
      <h2 className={`${montserrat.className}`}>Know your <span>Trading Objectives</span></h2>
      <p className={`${roboto.className}`}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <ul id="obj">
        <li >
          <h4 className={`${montserrat}`}>Currency:</h4>
          <button className="flagIcon"><img src="/pic2.png" alt="" id="flag" /><p className={`${roboto.className}`}>USD</p><i className="ri-arrow-down-s-line"></i></button>
        </li>
        <li className="marginlef">
          <h4 className={`${montserrat}`}>Normal:</h4>
          <ArrowBtn title="Normal" class1="margin1" icon="ri-arrow-down-s-line" />
        </li>
        <li className="marginlef">
          <h4 className={`${montserrat}`}>Balance:</h4>
          <ArrowBtn title="$200,000" class1="margin1" icon="ri-arrow-down-s-line"/>
        </li>
      </ul>
      <Image
          src={"/pic13.png"}
          alt=""
          width={945}
          height={694}
          id="sec4Img"
        />
    </section>
  );
}

export default Section4;
