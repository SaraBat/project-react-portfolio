import React from 'react';

export const SingleSkillList = ({ singleSkillList }) => {
  return (
    <section key={`${singleSkillList.title}`}>
      {singleSkillList.title}
      {singleSkillList.skills.map(
        (singleSkill) => {
          return (
            <section key={`${singleSkill}`}>
              <li>{singleSkill}</li>
            </section>
          );
        }
      )}
    </section>
  );
}