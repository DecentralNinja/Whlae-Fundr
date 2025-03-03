import Image from "next/image";
import { montserrat, roboto } from "@/app/layout";
import React from "react";

interface sect3Con {
  image: string;
  para: string;
  title: string;
  width: number;
  height: number
}

function sec3Content({ image, para, title, width, height }: sect3Con) {
  return (
    <div id="sec3Box">
      <Image src={image} alt="" width={45} height={height} />
      <h4 className={montserrat.className}>{title}</h4>
      <p className={roboto.className}>{para}</p>
    </div>
  );
}

export default sec3Content;
