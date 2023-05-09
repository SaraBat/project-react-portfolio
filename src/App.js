import React from 'react';
import { ProjectList } from 'components/Projects/projectList';
import { PostList } from 'components/Blog/PostList';
import { SkillList } from 'components/Skills/SkillList';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Arrow } from 'components/Arrow/Arrow';
import { TechStack } from 'components/Tech/TechStack';

export const App = () => {
  return (
    <div>
      <Header />
      <Arrow />
      <TechStack />
      <ProjectList />
      <PostList />
      <SkillList />
      <Footer />
    </div>
  )
}
