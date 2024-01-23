import React from 'react';

const Slide = ({ src }) => {
  
  return (
    <div 
      className="w-full h-full bg-center bg-no-repeat bg-cover duration-[.1s]"
      style={{backgroundImage: `url('${src}')`,}}
    >
      
    </div>
  )
}

export default Slide;