import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
