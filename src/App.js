import './App.css';
import Navber from './pages/Shared/Navber';
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About> } />
      </Routes>
    </div>
  );
}

export default App;
