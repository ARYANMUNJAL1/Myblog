
import './App.css';
import Head from './head'
import Bollywood from './bollywood';
import Food from './food';
import Fitness from './fitness';
import Hollywood from './hollywood';
import {Route,Routes} from 'react-router-dom';
import Technology from './technology';
import Nav from './nav.js';
function App() {
  return (
   <>
   <Nav />
 
      <Routes>
        
          <Route path="Home" element={<Head />} />
          <Route path = "Bollywood" element = {<Bollywood />} />
          <Route path = "Hollywood" element = {<Hollywood />} />
          <Route path = "Fitness" element = {<Fitness />} />
          <Route path = "Food" element = {<Food />} />
          <Route path="Technology" element={<Technology />} />




        
      </Routes>
   </>
  );
}

export default App;
