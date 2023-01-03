import './App.css';
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">

     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:_id" element={<SingleBeer/>} />
      </Routes>
      
    </div>
  );
}

export default App;
