import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, Product } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import s from '../components/styles/Style.module.css';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((data) => {
        console.log('Loaded products:', data);
        setProducts(data)});
  }, []);

  return (
    <section className={s.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => navigate(`/product/${product.id}`)}
        />
      ))}
    </section>
  );
};