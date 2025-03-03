import Btn1 from '@/app/components/Btn1'
import { roboto, montserrat } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const Section11 = () => {
  return (
    <section id='section11'>
        <div id='sec11Content'>
             <h2 className={`${montserrat.className}`}>We are more than just a <span>Modern Prop Trading Firm</span></h2>
             <p className={`${roboto.className}`}>Find out how you can benefit with FTMO.</p>
             <div id='content11'>
                <h4 className={`${montserrat.className}`}>Benefit from our custom trading apps</h4>
                <p className={`${roboto.className}`}>We’ve developed several apps for our traders. Some of them will help you with discipline, while others can assist with journaling or analysing the markets.</p>
                <Btn1 title='Learn More' class1='margin1'/>
             </div>
             <h1 className={`${montserrat.className}`}>01.</h1>
        </div>
        <Image src={'/pic17.png'} alt='' height={470} width={434} id='pic17'/>
    </section>
  )
}

export default Section11