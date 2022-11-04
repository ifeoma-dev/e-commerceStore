import './App.css';
import ShowProducts from './Pages/ShowProducts';
import SelectedProduct from './Pages/SelectedProduct';
import CategoryProducts from './Pages/CategoryProducts';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import WishlistPage from './Pages/WishlistPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';


function App() {
  return (
    <div className='w-[100vw] relative h-[100vh]'>
      {/* navbar/topbar container */}
      <div className='w-[100vw] z-50 h-[4.5rem] fixed top-0 left-0'>
        <NavBar />
      </div>

      {/* remainder of page */}
      <div className='mt-[5rem] w-[100vw] h-[calc(100vh-5rem)]] overflow-y-scroll'>
        <Routes>
          <Route path='/' element={<ShowProducts />} />
          <Route path='/products/:productid' element={<SelectedProduct />} />
          <Route path='/categories/:category' element={<CategoryProducts />} />
          <Route path='/user/wishlist' element={<WishlistPage />} />
          <Route path='/user/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
