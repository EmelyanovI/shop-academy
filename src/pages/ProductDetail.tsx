import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, sizes, Product, ProductColor, Size } from '../services/api';
import { ColorSelector } from '../components/ColorSelector';
import { SizeSelector } from '../components/SizeSelector';
import { Button } from '../components/Button';
import { cartStore } from '../stores/CartStore';
import s from '../components/styles/Style.module.css';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [isSizeAvailable, setIsSizeAvailable] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getProduct(parseInt(id)).then((data) => {
        setProduct(data);
        if (data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const isAvailable = selectedColor.sizes.includes(selectedSize.id);
      setIsSizeAvailable(isAvailable);
    }
  }, [selectedColor, selectedSize]);

  if (!product) return <div className={s.loader}>Загрузка...</div>;

  return (
    <section className={s.productDetail}>
      <h1 className={s.title}>{product.name}</h1>
      <div className={s.productDetail__wrapper}>
        <div className={s.productDetail__imagesBox}>
          {selectedColor && (
            <>
              <img className={s.productDetail_img} src={selectedColor.images[0]} alt={selectedColor.name} />
              <p>{selectedColor.description}</p>
              <p>Цена: {selectedColor.price}</p>
            </>
          )}
        </div>
        <div className={s.productDetail__info}>
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
          {selectedColor && (
            <SizeSelector
              sizes={selectedColor.sizes.map((sizeId) => sizes.find((size) => size.id === sizeId)!)}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          )}
          <Button
            onClick={() => {
              if (selectedColor && selectedSize && isSizeAvailable) {
                cartStore.addItem(
                  {
                    id: product.id,
                    name: product.name,
                    image: selectedColor.images[0],
                    price: selectedColor.price,
                  },
                  selectedColor,
                  selectedSize
                );
              }
            }}
            style={{
              backgroundColor: isSizeAvailable ? '#fff' : '#ffa9a9', 
              cursor: isSizeAvailable ? 'pointer' : 'not-allowed', 
              opacity: isSizeAvailable ? 1 : 0.7, 
            }}
            disabled={!isSizeAvailable} 
          >
            {isSizeAvailable ? 'Добавить в корзину' : 'Товара нет в наличии'}
          </Button>
        </div>
      </div>
    </section>
  );
};