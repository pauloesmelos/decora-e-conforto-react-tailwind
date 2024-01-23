import React from 'react';

const Slide = ({ img, active, index }) => {
  
  return (
    <div className="w-full relative">
      <div className="relative">
        {active === index && 
            <img 
                className="object-cover w-full h-[600px] bg-center"
                src={img}
            />
        }
      </div>
    </div>
  )
}

export default Slide;