import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <Navbar />
        <Routes>
          <Route path="/"
            element={<Homepage/>} />
          <Route path="/coins/:id"
            element={<CoinPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
