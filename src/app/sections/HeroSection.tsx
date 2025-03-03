import React from 'react'
import Btn1 from '../components/Btn1'
import Btn2 from '../components/Btn2'
import { montserrat ,roboto } from "../layout";
import Card from '../components/Card';


const HeroSection = () => {
  return (
    <>
    <section id='Hero'>
    <h4 className={`${montserrat.className}`}>SINCE 2021</h4>
    <h1 className={`${montserrat.className}`}>WE ARE LOOKING FOR PROFITABLE TRADERS</h1>
    <p className={`${roboto.className}`}>Unleash your inner whale and trade up to $500,000 in a trading environment where you can earn real gains.</p>
    <div id='btns'>
    <Btn1 title='Learn More' class1='margin1'/>
    <Btn2 title='FreeTrial' class2='margin2'/>
    </div>
    <div id='acheive'>
      <img src="./pic18.png" alt="" />
      <div id='text'>
        <h4 className={`${roboto.className}`}>15 Million+</h4>
        <h5 className={`${roboto.className}`}>Be part of growing community</h5>
      </div>
    </div>
    <ul id='boxes'>
      <Card title='$180M+' subtitle='Paid out to FTMO Traders' className=''/>
      <Card title='180+' subtitle='No. of countries with traders registered at FTMO' className=''/>
      <Card title='16M+' subtitle='No. of trades opened every month' className=''/>
      <Card title='8h' subtitle='Avg payout processing time' className=''/>
    </ul>
    </section>
    </>
  )
}

export default HeroSection