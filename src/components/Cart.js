import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Plus, Trash, Dash } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import libs from './libs';

const Cart = () => {
  const { cart, totalSum, increment, decrement, removeFromCart, totalItem } = useContext(AppContext);

  const displayCart = () => {
    if (cart && cart.length) {
      return (
        <div style={{ marginTop: '2.9%', width: '30%' }}>
          <Card>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '50%', display: 'flex' }}>
                <Card.Title>My Cart, </Card.Title>

                <p style={{ paddingLeft: '0%' }}>
                  {totalItem} {totalItem === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>
            <Card.Body>
              {cart.map((product, i) => (
                //    console.log(product);
                <div
                  key={product.id}
                  style={{ width: '100%', display: 'flex', border: '1px solid #fff', marginBottom: '3%' }}
                >
                  <div style={{ width: '38%', marginRight: '2%' }}>
                    <Card.Img src={product.image} />
                  </div>

                  <div style={{ width: '58%', marginLeft: '2%' }}>
                    {/*<p className="cart-product-detail">{libs.formatCurrency(product.price * product.amount)}</p>*/}
                    <p className="cart-product-detail">
                      {libs.formatCurrency(product.price)} x {product.amount} items ={' '}
                      {libs.formatCurrency(product.price * product.amount)}
                    </p>

                    <p className="cart-product-detail">{product.name}</p>
                    <div style={{ width: '100%', display: 'flex', marginTop: '21%' }}>
                      <div style={{ width: '60%', display: 'flex' }}>
                        <Dash
                          style={{
                            width: '20%',
                            backgroundColor: 'rgb(1, 136, 73)',
                            color: '#fff',
                            borderColor: 'rgb(1, 136, 73)',
                          }}
                          onClick={() => decrement(product.id, product.amount)}
                        />
                        <p style={{ width: '20%', margin: 'auto', marginRight: '15%' }} className="cart-product-detail">
                          {' '}
                          {product.amount}
                        </p>
                        <Plus
                          style={{
                            width: '20%',
                            backgroundColor: 'rgb(1, 136, 73)',
                            borderColor: 'rgb(1, 136, 73)',
                            color: '#fff',
                          }}
                          onClick={() => increment(product.id)}
                        />
                      </div>
                      <div style={{ width: '40%', marginLeft: '11%', marginTop: '-3%' }}>
                        <Trash className="cart-trash" onClick={() => removeFromCart(product.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '50%', fontSize: 'initial', fontWeight: '400' }}>
                  {' '}
                  <Card.Title>Total</Card.Title>
                </div>
                <div style={{ width: '50%', textAlign: 'end' }}>{libs.formatCurrency(totalSum)}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant="primary"
                  style={{ marginRight: '5%', backgroundColor: '#fff', color: '#2d2d2d', borderColor: '#ddd' }}
                >
                  View Cart
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: '5%', backgroundColor: '#018849', borderColor: '#018849' }}
                >
                  Checkout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    }
    return null;
  };
  return displayCart();
};

export default Cart;
