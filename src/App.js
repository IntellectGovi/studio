import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
}

export default App;
