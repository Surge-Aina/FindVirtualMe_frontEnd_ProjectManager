import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = ({ onSelect }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out!");
    navigate("/login");
  };

  const handleMenuSelect = (section) => {
    onSelect(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: "summary", label: "Summary" },
    { key: "education", label: "Education" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "fileUpload", label: "Compare Job Requirements" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="flex items-center gap-6">
        {/* Logout Button - Always Visible (Now First) */}
        <button
          className="px-4 py-2 font-medium text-white hover:text-red-400 transition-colors duration-200 border border-white/20 bg-transparent rounded-md hover:bg-red-500/10 hover:border-red-400/50"
          onClick={handleLogout}
        >
          Logout
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              className="px-4 py-2 font-medium text-white hover:text-blue-400 transition-colors duration-200 border-none bg-transparent rounded-md hover:bg-white/10"
              onClick={() => onSelect(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button (Now Last) */}
        <button
          className="md:hidden p-2 text-white hover:text-blue-400 transition-colors ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <div className="fixed top-20 right-4 bg-slate-800/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg p-4 z-40 min-w-48 md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className="w-full text-left px-4 py-3 font-medium text-white hover:text-blue-400 transition-colors duration-200 border-none bg-transparent rounded-md hover:bg-white/10"
                  onClick={() => handleMenuSelect(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
