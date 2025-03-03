import React from "react";
import Section1 from "./subSections/Section1";
import Section2 from "./subSections/Section2";
import Section3 from "./subSections/Section3";
import Section4 from "./subSections/Section4";
import Section5 from "./subSections/Section5";
import Section6 from "./subSections/Section6";
import Section7 from "./subSections/Section7";
import Section8 from "./subSections/Section8";
import Section9 from "./subSections/Section9";
import Section11 from "./subSections/Section11";
function Main() {
  return (
    <>
      <section id="mainSection">
        <section id="forCenter">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section11/>
        </section>
      </section>
    </>
  );
}

export default Main;
