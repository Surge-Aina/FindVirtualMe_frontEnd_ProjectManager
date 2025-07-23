const ProjectsCard = ({ projects = [] }) => {
  if (!projects.length) return <div>No projects available.</div>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-3">
        {projects.map((proj, idx) => (
          <li key={idx} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-bold">{proj.name}</h3>
            <p className="text-gray-700">{proj.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCard;
