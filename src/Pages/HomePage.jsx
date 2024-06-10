import React from 'react'
import Maincarousel from '../Customer/Home carousel/Maincarousel'
import HomeCardcaro from '../Customer/Components/HomeCardcaro'
import {  kurthi } from '../Datas/kurthi'

export default function HomePage() {
  return (
    <div>
        <Maincarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeCardcaro data={kurthi} sectionName={"men's kurta"}/>
        <HomeCardcaro data={kurthi} sectionName={"mens shoes"}/>
        <HomeCardcaro data={kurthi} sectionName={"women's sari"}/>
        <HomeCardcaro data={kurthi} sectionName={"womens Dress"}/>
       
        </div>
     
       
    </div>
  )
}
