/* eslint-disable max-len */
import React from 'react';
import { Button } from 'styles/Button';
import { Tag } from './Tag';

export const FinalProject = () => {
  return (
    <section className="project-list">
      <section className="final-project">
        <img className="final-project-image" alt="project" src="../../assets/plantmama.png" />
        <div className="final-project-content">
          <h2> PlantMama </h2>
          <p> PlantMama is an end to end web application I coded with a MongoDB database, a React frontend with Redux store and a NodeJS backend; hosted on Google Cloud. It provides user authentication and integrates with a third party API. It is continuously deployed on Netlify and GCP.</p>
          <div className="code-links">
            {['React', 'Redux', 'NodeJS', 'MongoDB', 'GCP'].map((singleTag) => {
              return (
                <Tag singleTag={singleTag} key={`${singleTag}`} />
              )
            })}
          </div>
          <div className="buttons">
            <Button
              type="button"
              alt="View The Code"
              btnColor="#EB5577"
              onClick={() => window.open('https://github.com/SaraBat/PlantMAMA-frontend')}>
              View the code
            </Button>
            <Button
              type="button"
              alt="Live Demo"
              btnColor="#0B24F5"
              onClick={() => window.open('https://plantmama.netlify.app/')}>
              Live Demo
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}