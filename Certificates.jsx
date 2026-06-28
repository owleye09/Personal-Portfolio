function Certifications() {
  const certifications = [
    {
      title: "Databricks Generative AI Fundamentals",
      date: "May 2025",
      platform: "Databricks",
    },
    {
      title: "Datacom Software Development Job Simulation",
      date: "August 2025",
      platform: "Forage",
    },
    {
      title: "CCNA: Introduction to Networks",
      date: "January 2026",
      platform: "Cisco",
    },
    {
      title: "Salesforce Agentforce Specialist",
      date: "December 2025",
      platform: "Salesforce",
    },
    {
      title: "L4G Generative AI Course",
      date: "March 2026",
      platform: "Google Cloud",
    },
  ];

  return (
    <section className="certifications section" id="certificates">
      <div className="certifications-card">
        <h2>Certifications</h2>

        <p className="certifications-intro">
          Certifications and learning programs I have completed to strengthen my
          technical foundation.
        </p>

        <div className="certifications-list">
          {certifications.map((cert) => (
            <div className="certificate-box" key={cert.title}>
              <h3>{cert.title}</h3>
              <p>{cert.platform}</p>
              <span>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;