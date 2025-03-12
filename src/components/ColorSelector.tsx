import React from 'react';
import { ProductColor } from '../services/api';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor | null;
  onSelectColor: (color: ProductColor) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div>
      <h3>Выберите цвет:</h3>
      {colors.map((color) => (
        <button
          key={color.id}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: selectedColor?.id === color.id ? '#ccc' : '#fff',
          }}
          onClick={() => onSelectColor(color)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
};