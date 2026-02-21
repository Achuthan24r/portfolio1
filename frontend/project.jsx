function Projects() {
  const projectList = [
    {
      title: "Hospital Reminder App",
      description: "Fullstack app that sends SMS & WhatsApp reminders.",
    },
    {
      title: "Smart Helmet IoT",
      description: "IoT-based helmet safety system.",
    },
    {
      title: "AgriMart",
      description: "Farmer-to-seller marketplace platform.",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
