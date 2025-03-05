import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
      <section id="footer1">
        <article id="ContentFooter">
          <article id="leftSide">
            <Image src="/pic1.png" alt="" width={200} height={50} />
            <p>
              Animi distinctio quia amet possimus sit. Voluptatum sunt corrupti
              iste voluptas itaque hic. Dolore sed quia et totam.
            </p>
            <ul id="content">
              <h5>Contact Us</h5>
              <li>
                <Image src={"/message.png"} alt="" height={19} width={25} />
                <p>Noe_Rempel30@yahoo.com</p>
              </li>
              <li>
                <Image src={"/phone.png"} alt="" height={19} width={25} />
                <p>275-437-1694</p>
              </li>
            </ul>
          </article>
          <article id="rightSide">
            <div className="layer">
              <h4>About Us</h4>
              <ul>
                <li>Evaluation Process</li>
                <li>Trading Objectives</li>
                <li>Why our FTMO Challenge?</li>
                <li>Testimonials</li>
                <li>Scaling Plan</li>
                <li>Affiliate Programme</li>
                <li>Terms & Conditions</li>
                <li>Careers</li>
                <li>Press Kit</li>
              </ul>
            </div>
            <div className="layer">
              <h4>Trading</h4>
              <ul>
                <li>Calendar</li>
                <li>Shop</li>
                <li>FTMO Academy</li>
                <li>Premium Programme</li>
              </ul>
            </div>
            <div className="layer">
              <h4>Apps</h4>
              <ul>
                <li>News Indicator</li>
                <li>Quick Trade Manager</li>
                <li>Equity Simulator</li>
                <li>Mentor App</li>
                <li>Trading Journal</li>
                <li>Statistical App</li>
                <li>Account Analysis</li>
                <li>Account MetriX</li>
              </ul>
            </div>
          </article>
        </article>
      </section>
      <article id="footer2">
        <article id="ContentFooter2">
          <div id="termsandCoditions">
            <p>
              All information provided on this site is intended solely for
              educational purposes related to trading on financial markets and
              does not serve in any way as a specific investment recommendation,
              business recommendation, investment opportunity analysis or
              similar general recommendation regarding the trading of investment
              instruments. FTMO only provides services of simulated trading and
              educational tools for traders. The information on this site is not
              directed at residents in any country or jurisdiction where such
              distribution or use would be contrary to local laws or
              regulations. FTMO companies do not act as a broker and do not
              accept any deposits. The offered technical solution for the FTMO
              platforms and data feed is powered by liquidity providers.
            </p>
            <div>
              <h5>Contact Options</h5>
              <h5>Privacy Policy</h5>
              <h5>Cookies</h5>
            </div>
          </div>
          <div id="footerdownBar">
            <h4>2023 © Copyright - FTMO.com Made with for trading</h4>
          </div>
        </article>
      </article>
    </div>
  );
};

export default Footer;
