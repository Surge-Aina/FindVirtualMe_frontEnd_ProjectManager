const ExperienceSection = ({ experiences = [] }) => {
  if (!experiences.length) return <div>No experience available.</div>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <h3 className="text-lg font-bold">{exp.title} at {exp.company}</h3>
          <p className="text-gray-500">{exp.location}</p>
          <p className="text-gray-500">
            {new Date(exp.startDate).toLocaleDateString()} -{" "}
            {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
          </p>
          <p className="text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
