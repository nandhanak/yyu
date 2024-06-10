import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MaincarouselData } from './MaincarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';



const Maincarousel = () => {
    
   
  const items= MaincarouselData.map((item, index) => (
      <img
        className='cursor-pointer' 
        role='presentation'
        key={index}
        src={item.image}
        alt={`carousel-image-${index}`}
        style={{ marginLeft:"10px", width: '95%', height: '70vh' }} // Adjust width and height here
      />
    ))

    return(
    <AliceCarousel
       items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={500}
       infinite
    />
    )
    }    ;
export default Maincarousel