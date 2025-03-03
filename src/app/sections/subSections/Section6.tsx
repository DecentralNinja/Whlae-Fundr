import NormalCard from "@/app/components/NormalCards";
import React from "react";

const Section6 = () => {
  return (
    <section id="section6">
      <h2>Key Hightlights</h2>
      <div id="layer">
        <NormalCard
          clas="/Vector.png"
          title="Swing Account"
          text="Pick the FTMO Account that perfectly suits your trading style and needs. FTMO Account Swing has no restrictions on holding positions over the weekend or trading during macroeconomic releases."
          heightImg={40}
          widthImg={40}
        />
        <NormalCard
          clas="/Vector-1.png"
          title="Scaling Plan"
          text="We aim for long-term business relationships. If you manage to be consistent and profitable, we will increase the balance of your FTMO Account by 25% every 4 months according to the Scaling Plan."
          heightImg={40}
          widthImg={35}
        />
        <NormalCard
          clas="/Group.png"
          title="Free Trial"
          text="If you are still not sure, you have the option to try the process completely for free. The Free Trial account is a shortened version of our FTMO Challenge with the same trading conditions."
          heightImg={40}
          widthImg={38}
        />
      </div>
    </section>
  );
};

export default Section6;
