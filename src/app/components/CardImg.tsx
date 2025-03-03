import Image from "next/image";
import React from "react";

interface CardImgProps {
  image: string;
  height: number;
  width: number;
  clas: string
}

function CardImg({ image, height, width, clas }: CardImgProps) {
  return (
    <li className="imgCard">
      <Image src={image} alt="" height={height} width={width} className={`${clas}`} />
    </li>
  );
}

export default CardImg;
