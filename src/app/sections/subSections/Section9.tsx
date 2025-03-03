import React from "react";
import Image from "next/image";

const Section9 = () => {
  return (
    <section id="section9">
      <div id="content9">
        <h2>
          The most popular retail trading platforms
        </h2>
        <p>
          We offer all our clients the best trading solution in the form of our
          MT4, MT5, DXtrade and cTrader accounts powered by data feed directly
          from our pool of prime liquidity providers. We do our best to simulate
          the real market conditions with super-raw spreads, very low commission
          and no markup to all demo trading accounts with virtual funds.
        </p>
      </div>
      <div id="rect"></div>
      <Image src={"/pic16.png"} alt="" height={664} width={470} id="tablet1" />
    </section>
  );
};

export default Section9;
