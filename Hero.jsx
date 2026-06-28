function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
      <div className="hero-text">
        <p className="hello">Hi, I'm </p>
        <h1> <span>Sriyaa</span> Reddy Gudi</h1>
        <h3>CSE Data Science Student</h3>
        <p>
          I enjoy building responsive web interfaces and exploring data-driven solutions.
        </p>
      
      <div className="hero-buttons">
        <a herf="#projects" className="first-btn">Explore My Work</a>
        <a href="/resume.pdf" target="blank" className="second-btn">View Resume</a>
      </div>
      </div>

      <div className="hero-card">
        <div className="status-card">
          <p>Currently Learning</p>
          <h4>Javascript, React</h4>
        </div>

        <div className="status-card">
          <p>Latest Project</p>
          <h4>Search Filter Application</h4>
        </div>

        <div className="status-card">
          <p>Focus Area</p>
          <h4>Frontend + Data Science</h4>
        </div>
      </div>
      </div>

      <div className="hero-right">
        <img src="/profile.jpeg" alt="Sriyaa Reddy Gudi" className="profile-img"></img>
      </div>
    </section>
  );
}

export default Hero;