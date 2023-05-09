import React from 'react';

export const SingleSkillList = ({ singleSkillList }) => {
  return (
    <section key={`${singleSkillList.title}`}>
      <h6 className="skills-title-list"> <mark className="markskill">{singleSkillList.title}</mark> </h6>
      {singleSkillList.skills.map(
        (singleSkill) => {
          return (
            <section key={`${singleSkill}`}>
              <ul>
                <li>{singleSkill}</li>
              </ul>
            </section>
          );
        }
      )}
    </section>
  );
}