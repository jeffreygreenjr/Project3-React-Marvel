import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsList from './pages/ComicsList';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <div className="AppBody">
        <Link className="HomePageButton" to="/marvel">
          <h3 className="TitleText">EXPLORE</h3> 
          <h1 className="Marvel">MARVEL</h1>
          <h3 className="TitleText">UNIVERSE</h3>
        </Link>
      </div>
    </div>
  );
}

export default App;
