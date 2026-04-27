import React from "react";

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Blob 1 - Top Left */}
      <div className="absolute top-[15%] left-[-5%] w-[300px] h-[300px] opacity-20 rotate-45">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
          <path d="M44.7,-76.4C58.3,-69.2,70.1,-56.9,78.5,-42.4C86.9,-27.9,91.9,-11.2,89.5,4.6C87.1,20.4,77.3,35.3,64.8,46.8C52.3,58.3,37.1,66.4,21.1,71.4C5.1,76.4,-11.7,78.3,-26.8,74.1C-41.9,69.9,-55.3,59.6,-65.4,46.5C-75.5,33.4,-82.3,17.5,-83.4,1.1C-84.5,-15.3,-79.9,-32.2,-69.8,-45.3C-59.7,-58.4,-44.1,-67.7,-29.4,-73.4C-14.7,-79.1,0.1,-81.2,15.6,-79C31.1,-76.8,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Blob 2 - Middle Right */}
      <div className="absolute top-[35%] right-[-10%] w-[400px] h-[400px] opacity-15 rotate-[-30deg]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-secondary">
          <path d="M52.8,-66.4C66.3,-55.1,73.6,-35.5,76.5,-16.2C79.4,3.1,77.9,22.1,68.2,37.3C58.5,52.5,40.6,64.1,21.5,69.5C2.4,74.9,-18.3,74.1,-35.4,66.3C-52.5,58.5,-66,43.7,-72.5,26.4C-79,9.1,-78.5,-10.7,-70.6,-26.8C-62.7,-42.9,-47.4,-55.3,-31.6,-65.4C-15.8,-75.5,-1.3,-83.3,15.6,-80.7C32.5,-78.1,50.1,-65.1,52.8,-66.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Blob 3 - Bottom Left */}
      <div className="absolute top-[65%] left-[-15%] w-[500px] h-[500px] opacity-10 rotate-[60deg]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary blur-sm">
          <path d="M42.7,-58.5C56.6,-48.6,70.1,-38.7,76.5,-24.8C82.9,-10.9,82.2,7.1,74.6,22.3C67,37.5,52.5,50,37.3,58.5C22.1,67,6.2,71.5,-9.7,71.2C-25.6,70.9,-41.5,65.8,-53.4,55.5C-65.3,45.2,-73.2,29.7,-75.6,13.6C-78,-2.5,-74.9,-19.2,-66,-33.5C-57.1,-47.8,-42.4,-59.7,-28,-67.2C-13.6,-74.7,0.5,-77.8,13.9,-75.1C27.3,-72.4,40.1,-63.9,42.7,-58.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Blob 4 - Near Footer Right */}
      <div className="absolute top-[85%] right-[5%] w-[250px] h-[250px] opacity-20 rotate-[-15deg]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-secondary">
          <path d="M45.5,-52.1C58.3,-41.4,67.6,-26.1,70.5,-9.7C73.4,6.7,69.9,24.3,59.3,37.5C48.7,50.7,31.1,59.5,12.7,63.1C-5.7,66.7,-24.9,65.1,-40.4,56C-55.9,46.9,-67.7,30.3,-72.1,12.3C-76.5,-5.7,-73.5,-25.1,-62.4,-40.1C-51.3,-55.1,-32.1,-65.7,-14.8,-69.3C2.5,-72.9,23.3,-69.5,45.5,-52.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      {/* Blob 5 - Center Random */}
      <div className="absolute top-[50%] left-[45%] w-[150px] h-[150px] opacity-25 rotate-[120deg] blur-md">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary">
          <path d="M47.7,-57.2C59.4,-45.3,64.8,-27.1,67.6,-8.7C70.4,9.8,70.5,28.5,61.8,42.5C53.2,56.5,35.7,65.8,17.4,69.5C-1,73.3,-20.2,71.5,-35.3,62.2C-50.5,52.8,-61.5,35.9,-65.7,17.8C-69.8,-0.2,-67,-19.4,-57.2,-33.4C-47.3,-47.4,-30.3,-56.3,-14.2,-59.5C1.8,-62.7,17.9,-60.2,33.1,-55.9C48.3,-51.5,63.5,-45.3,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
}
