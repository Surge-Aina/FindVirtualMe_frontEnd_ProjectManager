const SkillsCard = ({ skills = [] }) => {
  if (!skills.length) return <div>No skills listed.</div>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
