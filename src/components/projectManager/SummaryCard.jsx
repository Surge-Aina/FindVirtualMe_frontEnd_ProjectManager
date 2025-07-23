import React from "react";

const SummaryCard = ({ portfolio }) => {
  if (!portfolio) return <div>No portfolio data available.</div>;

  const {
    name,
    title,
    summary,
    email,
    phone,
    location,
    socialLinks,
  } = portfolio;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-lg text-gray-600">{title}</p>
      <p className="mt-4 text-gray-700">{summary}</p>

      <div className="mt-6 space-y-2 text-gray-700">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Location:</span> {location}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Links</h3>
        <ul className="space-y-1">
          {socialLinks?.github && (
            <li>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </li>
          )}
          {socialLinks?.linkedin && (
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
          )}
          {socialLinks?.website && (
            <li>
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCard;
