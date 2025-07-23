import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const PortfolioPage = () => {
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

  return (
    <div>
      <div>Portfolio Page</div>
      <NavBar/>
      <pre>{JSON.stringify(portfolio, null, 2)}</pre>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PortfolioPage;
