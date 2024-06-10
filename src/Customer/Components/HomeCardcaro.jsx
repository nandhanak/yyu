import React, { useState } from "react";

import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";

import Homesection from "../../Components/HomeSection/Homesection";
function HomeCardcaro({data,sectionName}) {
  const [activesIndex,setactiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3},
    1024: { items: 5.4 },
  };

  const slidePrev = () => setactiveIndex(activesIndex-1);
const slideNext = () => setactiveIndex(activesIndex+1)

  const syncActiveindex = ({ item }) => setactiveIndex(item)


  const items = data.slice(0,10).map((item) => <Homesection product={item}/>);
  return (
    <div className=" border  ">
      <h2 className="text-2*1 font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
         onSlideChanged={syncActiveindex}
         activesIndex={activesIndex}
        />
        
      <Button
          variant="contained"
  
         className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",bgcolor:"white"}}
           
          aria-label="next"
          onClick={slideNext}
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black",
              width: "10px",
            }}
          />
        </Button>
        <Button
         variant="contained"
         className="z-50 bg-white"
         
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slidePrev}
        >
          <KeyboardArrowLeftIcon
            sx={{
              transform: "rotate(90deg)",
              color: "black",
              width: "10px",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default HomeCardcaro;
