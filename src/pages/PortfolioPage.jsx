import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SummaryCard from "../components/projectManager/SummaryCard";
import EducationCard from "../components/projectManager/EducationCard";
import ExperienceCard from "../components/projectManager/ExperienceCard";
import ProjectsCard from "../components/projectManager/ProjectsCard";
import SkillsCard from "../components/projectManager/SkillsCard";

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState("summary"); // default view
  const apiUrl = import.meta.env.VITE_BAKEND_API;

  const fetchPortfolio = async () => {
    const res = await axios.get(`${apiUrl}/portfolio/me?email=testEmail@example.com`);
    return res.data;
  };

  const { data: portfolio, isLoading, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading portfolio</div>;

  const renderSection = () => {
    switch (activeSection) {
      case "education":
        return <EducationCard education={portfolio.education} />;
      case "experience":
        return <ExperienceCard experiences={portfolio.experiences} />;
      case "projects":
        return <ProjectsCard projects={portfolio.projects} />;
      case "skills":
        return <SkillsCard skills={portfolio.skills} />;
      default:
        return <SummaryCard portfolio={portfolio} />;
    }
  };

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 underline">Home</Link>
      <NavBar onSelect={setActiveSection} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
