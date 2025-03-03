import Sec3Content from "@/app/components/sec3Content";
import React from "react";

function Section3() {
  return (
    <section id="section3">
      <h2>Evaluation Process</h2>
      <article>
        <Sec3Content
          image="/challenge.svg"
          title="WhaleFundr Challenge"
          para="An WhaleFundr Challenge is the first step of the Evaluation Process. You need to succeed here to advance into the Verification stage. Prove your trading skills and discipline in observing the Trading Objectives."
          width={45}
          height={50}
        />
        <Sec3Content
          image="/Verification.svg"
          title="Verification"
          para="A Verification is the second and the last step towards becoming an WhaleFundr Trader. Once you pass a Verification stage and your results are verified, you will be offered to trade on an WhaleFundr Account."
          width={45}
          height={50}
        />
        <Sec3Content
          image="/WhaleFundr Trader.svg"
          title="WhaleFundr Trader"
          para="You are becoming an WhaleFundr Trader with an WhaleFundr Account. Trade responsibly and consistently and receive up to 90%. If you consistently generate profits on your WhaleFundr Account, "
          width={45}
          height={50}
        />
      </article>
      <img src="./pic12.png" alt="" id="graphic1" />
      <img src="./pic11.png" alt="" id="graphic2"/>
    </section>
  );
}

export default Section3;
