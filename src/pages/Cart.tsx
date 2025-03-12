import React from 'react';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../stores/CartStore';
import { Button } from '../components/Button';
import s from '../components/styles/Style.module.css';


export const Cart: React.FC = observer(() => {
  return (
    <section className={s.cart}>
      <h1>Корзина</h1>
      {cartStore.items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul className={s.card__list}>
          {cartStore.items.map((item, index) => (
            <li key={index} className={s.card__item}>
              <img
                src={item.image}
                alt={item.name}
                className={s.card_img}
              />
              <h2>{item.name}</h2>
              <p>Цвет: {item.color}</p>
              <p>Размер: {item.size}</p>
              <p>Цена: {item.price}</p>
              <Button
                onClick={() => cartStore.removeItem(index)}
                className={s.cart_buttonDelete}
              >
                Удалить
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
});