import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./SharedPost.css";
import { CiImageOn } from 'react-icons/ci';
import { MdSlowMotionVideo ,MdOutlineCancel } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineProfile } from 'react-icons/ai';
// import { RxCross2 } from 'react-icons/rx';



const SharedPost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="SharedPost">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's on your mind?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <CiImageOn />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <MdSlowMotionVideo />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <GrLocation />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <AiOutlineProfile />
            Shedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <MdOutlineCancel onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default SharedPost;
