import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex space-x-6 text-white">
        <Link to="/portfolio" className="hover:text-yellow-400">Home</Link>
        <Link to="/portfolio/education" className="hover:text-yellow-400">Education</Link>
        <Link to="/portfolio/experience" className="hover:text-yellow-400">Experience</Link>
        <Link to="/portfolio/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/portfolio/skills" className="hover:text-yellow-400">Skills</Link>
      </div>
    </nav>
  );
};

export default NavBar;
