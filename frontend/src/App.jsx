import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import './App.css';
import './index.css';

const App = () => {
    return (
        <Router>
            <CartProvider>
                <div className="app-container">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ProductListPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/products/:productId" element={<ProductDetailPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            <Route path="/cart" element={<CartPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;
