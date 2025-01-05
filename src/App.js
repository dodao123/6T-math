// math-clb/src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePages';
import ContactIcons from './components/Contact';


function App() {
    return (
        <Router>
            <div className="App">
                <HomePage />
                <ContactIcons />
            </div>
        </Router>
    );
}

export default App;