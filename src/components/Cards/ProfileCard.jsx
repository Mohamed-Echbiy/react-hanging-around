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
import { useState } from "react";

function ProfileCard({ img, name, job, hasBadge, bestFriend1, bestFriend2 }) {
  const [activeImage, setImage] = useState(img);

  return (
    <motion.div
      className="profile_Card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="profile">
        <img src={activeImage} className="profileImage" alt="profile picture" />
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
      <img
        src={bestFriend1}
        className="bestFriend1"
        alt=""
        onMouseEnter={() => setImage(bestFriend1)}
        onMouseLeave={() => setImage(img)}
      />
      <img
        src={bestFriend2}
        className="bestFriend3"
        alt=""
        onMouseEnter={() => setImage(bestFriend2)}
        onMouseLeave={() => setImage(img)}
      />
      {hasBadge && <SlBadge className="badge" />}
    </motion.div>
  );
}

export default ProfileCard;
