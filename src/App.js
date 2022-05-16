import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ComicsList from './pages/ComicsList';

function App() {


  return (
    <div className="App">
      <Header />
      <h1>Explore the Marvel Universe</h1>
      <ComicsList />
      <Footer />
    </div>
  );
}

export default App;
