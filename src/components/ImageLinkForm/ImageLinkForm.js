import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = ({ onInputChange, onSubmit }) => {
 
  return (
    <div>
      <p className="f3 mt-8">
        {"This magic brail will detect faces. Give it a try "}
      </p>
      <div className=" center ">

        <div className=" form center pa4 br3 shadow-5 ">
          <input
            className=" f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          ></input>
          <button
            className="w-20  grow f4 ml2 ph3 pv2 dib  white btn-color"
            onClick={onSubmit}
          >
            detect
          </button>

            {/* <button className=" clear grow"  >❌</button> */}

        
        </div>
      
          </div>
     
    </div>
  );
};
export default ImageLinkForm;
