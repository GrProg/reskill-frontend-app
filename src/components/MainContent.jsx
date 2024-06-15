import React from 'react';
import PostList from './PostList';
import HeroImage from './HeroImage';
import SinglePostPreview from './SinglePostPreview';
import './MainContent.scss';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="intro">
        <h1>Posts List</h1>
        <p>Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading.</p>
      </section>
      <section className="posts">
        <PostList />
      </section>
      <section className="hero">
        <HeroImage />
      </section>
      <section className="single-post-preview">
        <SinglePostPreview />
      </section>
    </main>
  );
};

export default MainContent;
