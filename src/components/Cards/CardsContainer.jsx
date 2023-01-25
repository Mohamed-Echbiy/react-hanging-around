import React from "react";
import ProfileCard from "./ProfileCard";
import profile1 from "../../assets/profileCard/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg";
import profile2 from "../../assets/profileCard/marin-tulard-QdD8NwVjlGU-unsplash.jpg";
import profile3 from "../../assets/profileCard/nadine-burzler-FsXq3xu72bs-unsplash.jpg";
import profile4 from "../../assets/profileCard/zhengtao-tang-V7SKRhXskv8-unsplash.jpg";

function CardsContainer() {
  return (
    <div className="cards_container">
      <ProfileCard
        img={profile1}
        name={"alejandro"}
        job="watching TV"
        hasBadge={true}
      />
      <ProfileCard img={profile2} name="marin tulard" job="sleeping" />
      <ProfileCard
        img={profile3}
        name="nadine burzler"
        job="twisting his head"
      />
      <ProfileCard
        img={profile4}
        name="zhengato-tang"
        job="swimming"
        hasBadge={true}
      />
    </div>
  );
}

export default CardsContainer;
