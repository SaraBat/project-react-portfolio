import React from 'react';
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
      <ListItems />
    </section>
  )
}