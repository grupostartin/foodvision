import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EntranceAnimation from './components/EntranceAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const LandingPage: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {showAnimation && <EntranceAnimation onComplete={() => setShowAnimation(false)} />}
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;