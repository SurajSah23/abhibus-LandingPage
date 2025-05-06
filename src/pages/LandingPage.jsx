import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BookingPanel from '../components/BookingPanel';
import OffersSection from '../components/OffersSection';
import AllOffersPage from '../components/AllOffersPage'; // ✅ new component
import WhyChooseUs from '../components/WhyChooseUs';
import SrtcCarousel from '../components/SrtcCarousel';
import AbhiAssuredBanner from '../components/AbhiAssuredBanner';
import OnlineBusBookingSection from '../components/OnlineBusBookingSection';
import OnlineBusTicketInfo from '../components/OnlineBusTicketInfo';
import BookingBenefits from '../components/BookingBenefits';
import OfferBanner from '../components/OfferBanner';
import HowToBookBus from '../components/HowToBookBus';
import LastHourBooking from '../components/LastHourBooking';
import BookBusTicketSection from '../components/BookBusTicketSection';
import TopPrivateTravels from '../components/TopPrivateTravels';
import PopularRoutes from '../components/PopularRoutes';
import TrackBusLocation from '../components/TrackBusLocation';
import FaqSection from '../components/FaqSection';
import StatsBanner from '../components/StatsBanner';
import AppDownloadCard from '../components/AppDownloadCard';
import AboutAbhibus from '../components/AboutAbhibus';
import FooterTabs from '../components/FooterTabs';
import Footer from '../components/Footer';



const LandingPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <BookingPanel />
              <OffersSection />
              <WhyChooseUs />
              <SrtcCarousel />
              <AbhiAssuredBanner />
              <OnlineBusBookingSection />
              <OnlineBusTicketInfo />
              <BookingBenefits />
              <OfferBanner />
              <HowToBookBus />
              <LastHourBooking />
              <BookBusTicketSection />
              <TopPrivateTravels />
              <PopularRoutes />
              <TrackBusLocation />
              <FaqSection />
              <StatsBanner />
              <AppDownloadCard />
              <AboutAbhibus />
              <FooterTabs />
              <Footer />
            </>
          }
        />
        <Route path="/offers" element={<AllOffersPage />} />
      </Routes>
    </>
  )
}

export default LandingPage
