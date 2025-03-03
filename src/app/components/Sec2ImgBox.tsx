import React from "react";
import Image from "next/image";
import { montserrat, roboto } from "@/app/layout";

interface Sec2ImgBoxProps {
    backImage: string
    Price: string
}


const Sec2ImgBox = ({backImage, Price}: Sec2ImgBoxProps) => {
  return (
    <>
      <div className="box">
        <div id="Sec2Image" style={{backgroundImage: `url(${backImage})`}}>
          <div id="content">
            <div id="blackBg">
              <p className={`${roboto.className}`}>Trader</p>
              <h5 className={`${montserrat.className}`}>Name</h5>
            </div>
            <Image src={"/pic21.png"} alt="" height={30} width={40} id="play" />
          </div>
        </div>
        <div id="profitContent">
            <p className={`${roboto.className}`}>Profit Split</p>
            <h4 className={`${montserrat.className}`}>{Price}</h4>
        </div>
      </div>
    </>
  );
};

export default Sec2ImgBox;
