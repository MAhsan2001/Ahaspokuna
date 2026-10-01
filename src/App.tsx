import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { StayPage } from './pages/StayPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { DiningPage } from './pages/DiningPage';
import { WeddingsEventsPage } from './pages/WeddingsEventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

// Layout wrapper to conditionally hide Guest Navbar & Footer on /admin
function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#0d1e16] font-sans antialiased selection:bg-[#587853]/20 selection:text-[#0d1e16]">
      {/* Scroll Restoration */}
      <ScrollToTop />

      {/* Guest Navigation (Hidden on Admin Routes) */}
      {!isAdminRoute && <Navbar />}

      {/* Route Views */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stay" element={<StayPage />} />
          <Route path="/stay/:roomId" element={<RoomDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/weddings-events" element={<WeddingsEventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* Fallback wildcard route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Guest Footer (Hidden on Admin Routes) */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
