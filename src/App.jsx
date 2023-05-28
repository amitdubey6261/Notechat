import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'
import Collections from './components/collections/Collections'
import AboutPage from './components/aboutPage/AboutPage.jsx'
import ContactPage from './components/contactPage/ContactPage.jsx'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import ProductPage from './components/productPage/ProductPage'

import Store from './Redux/Store'

import './App.css'
import Register from './components/login/Register'

function App() {

  return (
    <>
      <div className="layout">
        
        <BrowserRouter>
          <Provider store={Store}>
            <Navbar />
            <Login/>
            {/* <Register/> */}
            <ProductPage/>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/collection' element={<Collections />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/contact' element={<ContactPage />}></Route>
            </Routes>
            <Footer />
          </Provider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
