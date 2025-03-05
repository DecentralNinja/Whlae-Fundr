import React from "react";
import Image from 'next/image'

const Section8 = () => {
  return (
    <section id="section8">
      <div id="content8">
        <h2>Payout System</h2>
        <p>
          The default payout ratio for all FTMO Traders is set to 80%, however,
          an 80% share is not where we draw the line.
        </p>
        <p>
          All FTMO Traders can request payout on-demand. The payout can be
          processed just after 14 days, but you also have the ability to choose
          your own Profit Split Day, which can be even changed up to three
          times. In conclusion, we make sure that you will always receive your
          withdrawal on your most convenient day.
        </p>
        <p id="remove">
          If you meet the conditions of our Scaling Plan, not only do we
          increase the balance of your FTMO Account by 25%, the payout ratio
          will also automatically change to a staggering 90 %!
        </p>
      </div>
      <div id='rect'></div>
       <Image src={'/pic15.png'} alt='' height={664} width={470} id='tablet1'/>
    </section>
  );
};

export default Section8;
