import React from 'react';

export const Post = ({ singlePost }) => {
  return (
    <section>
      <img alt="project" src={singlePost.image} />
      <h2> {singlePost.title} </h2>
      <p> {singlePost.description}</p>
      <button type="button" alt="Read More"> Read More </button>
    </section>
  );
}