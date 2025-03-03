import Btn1 from '@/app/components/Btn1'
import Btn2 from '@/app/components/Btn2'
import { montserrat,roboto } from "@/app/layout";
import Image from 'next/image'
import React from 'react'

const Section7 = () => {
  return (
    <section id='section7'>
      <div id='content7'>
        <h2 className={montserrat.className}>Join the team of our <span>successful traders</span></h2>
        <p className={roboto.className}>If you are ready, accept our FTMO Challenge and become our FTMO Trader. You can even try the entire process completely free of charge.</p>
        <div id='Sec5Btn'>
        <Btn1 title='Learn More' class1='margin1'/>
        <Btn2 title='Free Trial' class2='margin2'/>
        </div>
      </div>
      <div id='rect'></div>
      <Image src={'/pic14.png'} alt='' height={664} width={470} id='trader'/>
    </section>
  )
}

export default Section7