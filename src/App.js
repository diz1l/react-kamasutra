import './App.css';
import { Header } from "./Components/Header";
import { Navbar } from "./Components/NavBar";
import { Main_info } from "./Components/Main";
import { Dialogs } from "./Components/Dialogs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<Main_info />} />
                        <Route exact path="/dialogs" element={<Dialogs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
