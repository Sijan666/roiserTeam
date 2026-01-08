import './App.css'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Women from './components/pages/Women'
import MyAccount from './components/pages/MyAccount'
import Wishlist from './components/pages/Wishlist'
import Checkout from './components/pages/Checkout'
import StoreLocation from './components/pages/StoreLocation'
import FAQ from './components/pages/FAQ'
import ShopGrid from './components/pages/ShopGrid'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Contact from './components/pages/Contact'
import Bloglist from './components/pages/Bloglist'
import Bloggrid from './components/pages/Bloggrid'
import BlogDetailes from './components/pages/BlogDetailes'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/myaccount" element={<MyAccount/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/storelocation" element={<StoreLocation/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/shopgrid" element={<ShopGrid/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bloglist" element={<Bloglist/>} />
          <Route path="/bloggrid" element={<Bloggrid/>} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/women" element={<Women />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/storelocation" element={<StoreLocation />} />
          <Route path="/shopgrid" element={<ShopGrid />} />
          <Route path="/blogdetailes" element={<BlogDetailes />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
