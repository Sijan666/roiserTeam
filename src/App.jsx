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
import Login from './components/Login'
import Signup from './components/Signup'
import Faq from './components/pages/Faq'
import ShopGrid from './components/pages/ShopGrid'


function App () {
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
          <Route path="/faq" element={<Faq/>} />
          <Route path="/shopgrid" element={<ShopGrid/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App


