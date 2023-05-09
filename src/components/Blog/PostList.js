import React from 'react';
import { blogArray } from './blogArray';
import { Post } from './Post';
import './Blog.css';

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
    <section className="postlist">
      <Posts />
    </section>
  );
}

// all div names need to be fixed for styling to work