import React from 'react';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import stackoverflow from '../../images/stackoverflow.png';

export const BioLinks = () => {
  return (
    <div className="social-links">
      <a className="icon" href="https://www.linkedin.com/in/sarabattilotti/" target="_blank" rel="noreferrer"> <img src={linkedin} alt="Linkedin for Sara" /> </a>
      <a className="icon" href="https://github.com/SaraBat" target="_blank" rel="noreferrer"> <img src={github} alt="Github for Sara" /> </a>
      <a className="icon" href="https://stackoverflowteams.com/c/technigo/users/448/?tab=profile" target="_blank" rel="noreferrer"> <img src={stackoverflow} alt="Stack Overflow for Sara" /> </a>
    </div>
  );
}