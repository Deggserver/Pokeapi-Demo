import './App.css';
import Header from './header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./home/HomePage"
import AboutPage from "./about/AboutPage"
import PageNotFound from "./notFound/PageNotFound"
import PokedexEntry from './pokedex/PokedexEntry';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pokedex" element={<PokedexEntry />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
