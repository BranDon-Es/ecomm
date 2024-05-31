import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section className="about-story">
        <div className="about-header">
          <h1>Our Story</h1>
          <p>Learn more about our journey and mission</p>
        </div>
        <div className="about-content">
          <p>At Zero to One, our journey began with a simple idea: to provide the latest gadgets at unbeatable prices, making technology accessible to everyone.</p>
          <p>Founded by a team of passionate innovators, we believe in the power of technology to transform lives. Our mission is to empower individuals by offering cutting-edge gadgets and unparalleled service.</p>
          <p>Join us as we continue to pave the way for innovation, one product at a time.</p>
        </div>
      </section>

      <section className="about-team">
        <div className="team-header">
          <h2>Meet the Team</h2>
          <p>Get to know the faces behind Zero to One</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <img src="../assets/team-member-1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="../assets/team-member-2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO & Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="../assets/team-member-3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
