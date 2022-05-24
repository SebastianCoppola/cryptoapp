import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//VIEWS
import Home from './views/Home/Home';
import Coins from './views/Coins/Coins';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import NotFound from './components/common/NotFound';
import CoinDetail from './views/CoinDetail/CoinDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/coindetail/:id' element={<CoinDetail />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
