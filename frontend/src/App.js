import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/root.css';
import './css/responsive.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import HomePageContent from "./Components/HomePageContent"; // Contains all home page sections

// Layout component containing Navbar, Footer, and placeholder for route content
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><HomePageContent /></Layout>}
        />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route
              path='/main/*'
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
