import Image from "next/image";
import React from "react";

interface sect3Con {
  image: string;
  para: string;
  title: string;
  height: number,
  width: number
}

function sec3Content({ image, para, title, width, height }: sect3Con) {
  return (
    <div id="sec3Box">
      <Image src={image} alt="" width={45} height={height} />
      <h4 >{title}</h4>
      <p >{para}</p>
    </div>
  );
}

export default sec3Content;
