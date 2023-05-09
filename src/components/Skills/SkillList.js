import React from 'react';
import { Title1 } from 'styles/Title1';
import { SkillsArray } from './SkillsArray';
import { SingleSkillList } from './SingleSkillList';
import './Skills.css';

export const SkillList = () => {
  const ListItems = () => {
    return (SkillsArray.map((singleSkillList) => {
      return (
        <SingleSkillList singleSkillList={singleSkillList} key={`${singleSkillList.title}`} />
      )
    })
    )
  }
  return (
    <section className="skills-backgorund">
      <div className="div-skills-title">
        <Title1> Skills </Title1>
      </div>
      <div className="skills">
        <ListItems />
      </div>
    </section>
  )
}