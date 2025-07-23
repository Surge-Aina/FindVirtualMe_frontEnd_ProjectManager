const EducationCard = ({ education = [] }) => {
  if (!education.length) return <div>No education information available.</div>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <h3 className="text-lg font-bold">{edu.school}</h3>
          <p className="text-gray-600">{edu.fieldOfStudy}</p>
          <p className="text-gray-500">
            {new Date(edu.startDate).toLocaleDateString()} -{" "}
            {new Date(edu.endDate).toLocaleDateString()}
          </p>
          <p className="text-gray-700">{edu.description}</p>
          {edu.degrees?.length > 0 && (
            <p className="text-sm text-gray-600">Degrees: {edu.degrees.join(", ")}</p>
          )}
          {edu.awards?.length > 0 && (
            <p className="text-sm text-gray-600">Awards: {edu.awards.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
