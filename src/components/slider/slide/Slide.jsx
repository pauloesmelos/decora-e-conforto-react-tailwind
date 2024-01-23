import React from 'react';

const Slide = ({ src }) => {
  
  return (
    <div 
      className="w-full h-full bg-center bg-no-repeat bg-cover duration-[.5s] ease-linear"
      style={{backgroundImage: `url(${src})`,}}
    >
      
    </div>
  )
}

export default Slide;