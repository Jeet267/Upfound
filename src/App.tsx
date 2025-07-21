import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ExploreProducts from './pages/ExploreProducts';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import BackerDashboard from './pages/BackerDashboard';
import StartupDashboard from './pages/StartupDashboard';
import InvestorDashboard from './pages/InvestorDashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ApplyToList from './pages/ApplyToList';
import JoinInvestor from './pages/JoinInvestor';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/explore" element={<ExploreProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/backer/dashboard" element={<BackerDashboard />} />
              <Route path="/startup/dashboard" element={<StartupDashboard />} />
              <Route path="/investor/dashboard" element={<InvestorDashboard />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/apply" element={<ApplyToList />} />
              <Route path="/join-investor" element={<JoinInvestor />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;