import React from 'react';
import s from './styles/Style.module.css';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    colors: {
      id: number;
      name: string;
      images: string[];
    }[];
  };
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const firstColor = product.colors[0]; 

  return (
    <div onClick={onClick} className={s.productCard}>
      {firstColor && firstColor.images.length > 0 && (
        <img
        src={firstColor.images[0]}
        alt={product.name}
        style={{ width: '150px', height: 'auto', objectFit: 'contain' }}
      />
      )}
      <h3 className={s.productCard__title} style={{ textAlign: 'center' }}>{product.name}</h3>
    </div>
  );
};