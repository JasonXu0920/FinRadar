import { ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import {Outlet} from 'react-router';

function App() { 
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
