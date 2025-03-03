import React from "react";
import CardImg from "@/app/components/CardImg";

function Section1() {
  return (
    <>
      <section id="section1">
        <h2>
          <span>WhaleFundr</span> is one of the most reliable firms in modern prop trading
          industry.
        </h2>
        <article id="boxes">
          <ul className="layer">
            <CardImg image="/pic4.png" height={43} width={180} clas="brandImage1"/>
            <CardImg image="/pic5.png" height={77} width={180} clas="brandImage"/>
            <CardImg image="/pic7.png" height={112} width={180} clas="brandImage"/>
            <CardImg image="/pic6.png" height={73} width={180} clas="brandImage"/>
          </ul>
          <ul className="layer">
          <CardImg image="/pic4.png" height={43} width={180} clas="brandImage1"/>
            <CardImg image="/pic5.png" height={77} width={180} clas="brandImage"/>
            <CardImg image="/pic7.png" height={112} width={180} clas="brandImage"/>
            <CardImg image="/pic6.png" height={73} width={180} clas="brandImage"/>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Section1;
