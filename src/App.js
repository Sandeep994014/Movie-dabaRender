// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbars from './components/Navbars';
import MovieDetails from './components/MovieDetails';  // Import the MovieDetails component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Navbars />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
