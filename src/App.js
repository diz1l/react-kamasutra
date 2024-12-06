import './App.css';
import {Header} from "./Components/Header";
import {Navbar} from "./Components/NavBar";
import {Main_info} from "./Components/Main";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Main_info/>
    </div>
  );
}

export default App;
