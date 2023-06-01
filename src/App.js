import BrowsePage from './components/BrowsePage.js';
import ServicsesPage from './components/ServicesPage.js';
import BuySection from './components/BuySection.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import Navigation from './components/Navigation.js';
import RentSection from './components/RentSection.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage.js';
import AboutPage from './components/AboutPage.js';

export default function App(){
    return(
        <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path='/' element={
            <div>
                <HeroSection />
                <BuySection />
                <RentSection />
            </div>
            }/>
            <Route path='/browse' element={<BrowsePage />}/>
            <Route path='/services' element={<ServicsesPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='*' element={<h1>No page!</h1>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}