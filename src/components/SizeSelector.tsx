import React from 'react';
import { Size } from '../services/api';

interface SizeSelectorProps {
  sizes: Size[];
  selectedSize: Size | null;
  onSelectSize: (size: Size) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div>
      <h3>Выберите размер:</h3>
      {sizes.map((size) => (
        <button
          key={size.id}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: selectedSize?.id === size.id ? '#ccc' : '#fff',
            cursor: 'pointer',
          }}
          onClick={() => onSelectSize(size)}
        >
          {size.label}
        </button>
      ))}
    </div>
  );
};