import { ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import {Outlet} from 'react-router';
import { UserProvider } from './Context/useAuth';

function App() { 
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
