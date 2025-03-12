import React from 'react';
import s from './styles/Style.module.css';

export const Footer: React.FC = () => {
  return (
    <footer  className={`${s.footer}`}>
      <p>© 2025 Тестовое задание "Магазин". Все права защищены.</p>
    </footer>
  );
};