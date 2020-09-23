import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({box,imageurl}) => {
  return (
    <div className="center ma">
        <div className='absolute mt2'>
<img id='inputimage' alt="" src={imageurl} width='500px' height='auto'></img>
   
{    box.map((item, index) => (
                    <div className='bounding-box' style={{top: item.toprow, right: item.rightcol, bottom: item.bottomrow, left: item.leftcol}} key={index}></div>
                ))}
    </div>
    </div>
  );
};
export default FaceRecognition;