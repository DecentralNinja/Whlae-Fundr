import Image from 'next/image'
import React from 'react'
import { montserrat,roboto } from "@/app/layout";

interface MyCardclass {
    clas: string,
    title: string,
    text: string,
    heightImg: number,
    widthImg: number
}

const NormalCard = ({clas, title, text, heightImg, widthImg}: MyCardclass) => {
  return (
    <div className='Card'>
        <Image src={clas} alt='' height={heightImg} width={widthImg}/>
        <h5 className={montserrat.className}>{title}</h5>
        <p className={roboto.className}>{text}</p>
    </div>
  )
}

export default NormalCard