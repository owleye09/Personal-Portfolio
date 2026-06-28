function Skills(){
  const skills=[
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Java",
    "Python",
    "SQL",
    "Tableau",
    "GitHub",
    "Data Visualization",
    "Problem Solving",
    "Communication"
  ];
  return(
    <section className="skills secction" id="skills">
      <div className="skills-card">
        <h2>Skills</h2>

        <div className="floating-skills">
          {skills.map((skill)=> (
            <span className="skill-bubble" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
