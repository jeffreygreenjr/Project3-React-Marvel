import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsList from './pages/ComicsList';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Header />
      <Link to="/marvel">
        <h1>Explore the Marvel Universe</h1>
      </Link>
      <Footer />
    </div>
  );
}

export default App;
