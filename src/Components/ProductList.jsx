import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, cart, onAddToCart, onDecrementFromCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cartItem}
            onAddToCart={() => onAddToCart(product)}
            onDecrementFromCart={() => onDecrementFromCart(product)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;