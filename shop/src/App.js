import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Wishlist } from './components/Wishlist/Wishlist';
import { Bag } from './components/Bag/Bag';

function App() {
  // const {pathname} = useLocation()
  return (
    <>
{/* <Home/> */}
  {/* <//> */}
    <Routes>

      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Bag" element={<Bag/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
