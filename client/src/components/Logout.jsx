import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth'; 

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Auth.logout();
    navigate('/login');
  }, [navigate]);

  return <div>Logging out...</div>;
};


export default Logout;

