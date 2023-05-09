import React from 'react';
import profilePic from '../../images/profile-pic.jpeg'

export const ProfilePic = () => {
  return (
    <div className="div-profile-pic">
      <img
        className="profile-pic"
        src={profilePic}
        alt="Sara" />
    </div>
  );
}