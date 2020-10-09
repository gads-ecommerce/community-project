import React, { Fragment, useContext } from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import AppContext from '../context/AppContext';

const CartPage = () => {
  const { cart } = useContext(AppContext);
  // const {addToCart, cart} = value

  const displayStoargeProduct = () => {
    return JSON.parse(localStorage.getItem('cartItems')).map((c, i) => (
      <Fragment>
        <small>{c.name}</small>
        <small>{1 + 1}</small>
      </Fragment>
    ));
  };

  const displayContextProduct = () => {
    return cart.map((c, i) => (
      <Fragment>
        <small>{c.name}</small>
        <small>{1 + 1}</small>
      </Fragment>
    ));
  };

  return (
    <Fragment>
      <NavBar />

      <Container>
        hello storage: {displayStoargeProduct()}
        <hr></hr>
        context: {displayContextProduct()}
      </Container>
    </Fragment>
  );
};

export default CartPage;
