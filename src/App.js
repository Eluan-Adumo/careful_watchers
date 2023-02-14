// import logo from './logo.svg';
import './css/index.css';

import 'remixicon/fonts/remixicon.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes.js';

// import Footer from './components/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
    
  );
}

export default App;
