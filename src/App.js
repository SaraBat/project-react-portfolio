import React from 'react';
import { ProjectList } from 'components/projectList';
import { PostList } from 'components/PostList';
import { SkillList } from 'components/SkillList';
import { Hero } from 'components/Hero';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <div>
      <Hero />
      <ProjectList />
      <PostList />
      <SkillList />
      <Footer />
    </div>
  )
}
