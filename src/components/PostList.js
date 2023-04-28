import React from 'react';
import { blogArray } from './blogArray';
import { Post } from './Post';

export const PostList = () => {
  const Posts = () => {
    return (
      blogArray.map((singlePost) => {
        return (
          <section key={`${singlePost.title}`}>
            <Post singlePost={singlePost} />
          </section>
        )
      })
    )
  }

  return (
    <section>
      <Posts />
    </section>
  );
}