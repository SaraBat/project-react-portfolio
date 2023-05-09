import React from 'react';
import { Title1 } from 'styles/Title1';
import { SkillsArray } from './SkillsArray';
import { SingleSkillList } from './SingleSkillList';

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
    <section>
      <Title1> Skills </Title1>
      <ListItems />
    </section>
  )
}