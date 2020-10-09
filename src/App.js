import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import CartPage from './components/CartPage';
import { AppProvider } from './context/AppContext';
import { useApp } from './useApp';

const App = () => {
  const { cart, addToCart, disable, count, increment, decrement, removeFromCart, totalSum, totalItem } = useApp();

  return (
    <Switch>
      <AppProvider
        value={{ addToCart, cart, count, disable, increment, decrement, removeFromCart, totalSum, totalItem }}
      >
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:name" component={Product} />
        <Route exact path="/cart" component={CartPage} />
      </AppProvider>
    </Switch>
  );
};

export default App;
