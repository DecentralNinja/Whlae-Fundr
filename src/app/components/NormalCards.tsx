import Image from 'next/image'
import React from 'react'


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
        <h5>{title}</h5>
        <p>{text}</p>
  </div>
  )
}

export default NormalCard