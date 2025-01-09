import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePages';
import Introduction from './Pages/Introduction';

import ContactIcons from './components/Statics/Contact';
import Header from './components/Statics/Header';
import Footer from './components/Statics/Footer';
import  Contact  from './Pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <ContactIcons />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* Add more routes here as needed */}
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;