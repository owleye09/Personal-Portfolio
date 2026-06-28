function Projects() {
  const projects = [
    {
      title: "Product Search Filter App",
      description:
        "A responsive product search and filter app using API data, live search, category filtering, clear button, loading spinner, and clean card layout.",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
      live: "https://search-product-filter.vercel.app/",
      github: "https://github.com/owleye09/search-product-filter",
    },
    {
      title: "Sambhavan Event Planning Website",
      description:
        "A responsive multi-page event planning website for booking and showcasing traditional event planning services with forms and interactive UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://sambhavan.vercel.app/",
      github: "https://github.com/owleye09/Sambhavan",
    },
    {
      title: "Sign Language Detection",
      description:
        "A computer vision project that detects numbers from 1 to 10 using Python and image processing concepts.",
      tech: ["Python", "NumPy", "Computer Vision"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="projects-card">
        <h2>Projects</h2>

        <p className="projects-intro">
          A few projects I have worked on while learning frontend development,
          data science, and AI/ML.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-box" key={project.title}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;