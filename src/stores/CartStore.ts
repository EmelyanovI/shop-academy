import { makeAutoObservable } from 'mobx';

interface CartItem {
  id: number;
  name: string;
  image: string; // Добавляем поле для изображения
  price: string;
  color: string;
  size: string;
}

class CartStore {
  items: CartItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(product: { id: number; name: string; image: string; price: string }, color: { name: string }, size: { label: string }) {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      color: color.name,
      size: size.label,
    };
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}

export const cartStore = new CartStore();