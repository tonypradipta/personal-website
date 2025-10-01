const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/About.png" alt="About" />
      </div>

      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <p>
          Hello World, I am an active 5th semester student at Ganesha University of Education, 
          Faculty of Engineering and Vocational Studies, Department of Informatics Engineering, 
          Bachelor of Information Systems Study Program. With a deep interest in technologies and 
          management. I am always excited to explore new technologies, sharpen my problem-solving 
          skills, and continuously grow in the field of programming.
        </p>
        
        <p>
          In my free time, I enjoy coding and exploring new tools that can help me build creative 
          and impactful solutions. My current focus is on developing user-friendly applications and 
          enhancing my knowledge in artificial intelligence. For me, Informatics is not only about 
          writing code, but also about creating solutions that bring real value and innovation to society.
        </p>
        
        <div className="about-info-boxes">
          <div className="info-box">
            <h3>Location</h3>
            <p>Denpasar, Bali, Indonesia</p>
          </div>
          <div className="info-box">
            <h3>Study At</h3>
            <p>Ganesha University of Education</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;