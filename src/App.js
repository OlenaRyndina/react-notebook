import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <Router>
                    <Navbar />
                    <div className="container pt-4">
                        <Alert />
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="/about" element={<About/>}/>
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
