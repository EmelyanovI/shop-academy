import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App: React.FC = () => {

    return (
        <main>
            <Header />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            < Footer />
        </main>
    );
};

export default App; // Экспорт по умолчанию