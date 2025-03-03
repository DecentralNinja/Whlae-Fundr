import Sec2ImgBox from "@/app/components/Sec2ImgBox";
import React from "react";

function Section2() {
  return (
    <>
      <section id="section2">
        <article id="leftSide">
          <Sec2ImgBox backImage="/pic10.jfif" Price="$76,000"/>
          <Sec2ImgBox backImage="/pic8.jfif" Price="$41,018"/>
          <Sec2ImgBox backImage="/pic9.jfif" Price="$500,180"/>
        </article>
        <article id="rightSide">
          <h2 >Trade for <span>Modern Prop Trading</span> Firm</h2>
          <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover</p>
          <p  id="para2">Upon successful completion of the Evaluation Process, you are offered to trade on an WhaleFundr Account with a balance of up to 200,000 USD. Your journey to get there might be challenging, but our educational applications, Account Analysis and Performance Coaches are here to help you on the endeavour to financial independence.</p>
        </article>
      </section>
    </>
  );
}

export default Section2;
