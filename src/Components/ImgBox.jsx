import React from "react";

const ImgBox = ({ image }) => {
  return (
    <div>
      <div className="w-[220px] rounded-xl ">
        <img src={image} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

{
  /* <div className="row1">
          <p>Game ui</p>
          <div className="Save">
            <p>Save</p>
          </div>
        </div>
        <div className="row2">
          <div className="download">
            <img src="" alt="" />
          </div>
          <div className="more">
            <img src="" alt="" />
          </div>
        </div> */
}

export default ImgBox;
