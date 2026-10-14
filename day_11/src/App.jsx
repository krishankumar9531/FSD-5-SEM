import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Product from './Components/Product.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shop-cart') ?? '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('shop-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((items) => [...items, product]);
  };

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://dummyjson.com/products', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load products');
        return res.json();
      })
      .then((data) => setProducts(data.products ?? []))
      .catch((error) => {
        if (error.name !== 'AbortError') console.error(error);
      });
    return () => controller.abort();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<><main><h2>Welcome to our store</h2><p>Find something you love.</p></main><Product products={products} onAddToCart={addToCart} /></>} />
          <Route path="/products" element={<Product products={products} onAddToCart={addToCart} />} />
          <Route path="/about" element={<main><h2>About</h2><p>Welcome to our e-commerce store.</p></main>} />
          <Route path="/cart" element={(
            <main>
              <h2>Your Cart ({cart.length})</h2>
              {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <ul>
                  {cart.map((product, index) => (
                    <li key={`${product.id}-${index}`}>{product.title} — ${product.price}</li>
                  ))}
                </ul>
              )}
            </main>
          )} />
          <Route path="*" element={<main><h2>Page not found</h2></main>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App
