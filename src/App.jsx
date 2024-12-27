import React, { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import CartModal from './Components/CartModel';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decrementFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('overflow-hidden'); // Disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-hidden'); // Re-enable scroll
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onCartClick={openModal} />
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={addToCart}
        onDecrementFromCart={decrementFromCart}
      />
      {isModalOpen && (
        <CartModal
          cart={cart}
          onClose={closeModal}
          onRemove={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;