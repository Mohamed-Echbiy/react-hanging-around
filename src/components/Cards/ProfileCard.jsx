import React from "react";
import "../../ProfileCard.css";
import { motion } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { SlBadge } from "react-icons/sl";

function ProfileCard({ img, name, job, hasBadge, bestFriend1, bestFriend2 }) {
  return (
    <div className="profile_Card">
      <div className="profile">
        <img src={img} className="profileImage" alt="profile picture" />
        <div className="icons_name_job">
          <h5 className="name">{name}</h5>
          <p className="job-title">{job}</p>
          <div className="icons">
            <AiFillTwitterCircle className="twitter" />
            <AiFillYoutube className="youtube" />
            <AiOutlineWhatsApp className="whatsapp" />
            <AiFillInstagram className="instagram" />
          </div>
        </div>
      </div>
      <img src="./cat1.jpg" className="bestFriend1" alt="" />
      <img src="./cat3.jpg" className="bestFriend3" alt="" />
      {hasBadge && <SlBadge className="badge" />}
    </div>
  );
}

export default ProfileCard;
