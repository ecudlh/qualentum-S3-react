import './index.css'
import App from './App.jsx';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { LoginProvider } from './context/LoginContext';
import { ProductContext, ProductProvider } from './context/ProductContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <LoginProvider>
          <ProductProvider>
            <RouterProvider router={router} />
          </ProductProvider>
        </LoginProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
