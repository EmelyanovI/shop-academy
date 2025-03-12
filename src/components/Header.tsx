import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import s from './styles/Style.module.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={`${s.header}`}>
      <h1 className={s.title}>MegaShop</h1>
      <div>
        {location.pathname === '/cart' ? (
          <Button onClick={() => navigate('/')}>Выйти из корзины</Button>
        ) : (
          <Button onClick={() => navigate('/cart')}>Корзина</Button>
        )}
      </div>
    </header>
  );
};