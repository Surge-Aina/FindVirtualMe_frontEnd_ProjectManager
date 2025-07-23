import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NavBar = ({ onSelect }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logged out!');
        navigate('/login')
      };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex space-x-6 text-white">
            <button className="hover:text-yellow-400" onClick={() => onSelect("summary")}>Summary</button>
            <button className="hover:text-yellow-400" onClick={() => onSelect("education")}>Education</button>
            <button className="hover:text-yellow-400" onClick={() => onSelect("experience")}>Experience</button>
            <button className="hover:text-yellow-400" onClick={() => onSelect("projects")}>Projects</button>
            <button className="hover:text-yellow-400" onClick={() => onSelect("skills")}>Skills</button>
            <button className="hover:text-yellow-400 ml-auto" onClick={() => handleLogout()}>Logout</button>
        </div>
    </nav>
  );
};

export default NavBar;

