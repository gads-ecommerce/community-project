import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Card, CardDeck, Image, Button } from 'react-bootstrap';
import Cart from './Cart';
import lib from './libs';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';

const Product = ({ history }) => {
  const { addToCart, disable } = useContext(AppContext);
  const [single, setSingle] = useState({});
  let location = useLocation();
  useEffect(() => {
    if (location.state && location.state.product) {
      const { product } = location.state;

      setSingle(product);
    } else {
      history.push('/');
    }
  }, [location.state, history]);
  return (
    <Fragment>
      <NavBar />

      <Container>
        <div style={{ width: '100%', display: 'flex' }}>
          <CardDeck style={{ marginTop: '2%', width: '70%' }}>
            <div style={{ width: '60%' }}>
              <Card style={{ margin: '3%' }}>
                <div style={{ margin: 'auto', padding: '4%' }}>
                  <Image src={single.image} rounded />
                </div>
              </Card>
            </div>

            <div style={{ width: '40%' }}>
              <Card style={{ marginLeft: '0', marginRight: '15%', marginTop: '5%' }}>
                {/*<Card.Img variant="top" src={single.image}/>*/}
                <Card.Body>
                  <Card.Title>
                    <p className="product-name">{single.name}</p>
                  </Card.Title>
                  {/*<Card.Text>*/}
                  <p className="single-product-price" style={{ fontWeight: '400' }}>
                    {' '}
                    {lib.formatCurrency(single.price)}
                  </p>

                  {/*</Card.Text>*/}
                  {disable ? (
                    <Button
                      style={{
                        backgroundColor: '#018849',
                        textTransform: 'capitalize',
                        width: '65%',
                        margin: 'auto',
                        padding: '2%',
                      }}
                      onClick={
                        () => addToCart(single)
                        // handleOpen()
                      }
                    >
                      add to cart
                    </Button>
                  ) : (
                    <Button
                      disabled={disable}
                      style={{
                        backgroundColor: '#018849',
                        textTransform: 'capitalize',
                        width: '65%',
                        margin: 'auto',
                        padding: '2%',
                      }}
                      onClick={
                        () => addToCart(single)
                        // handleOpen()
                      }
                    >
                      add to cart
                    </Button>
                  )}
                  {/*<Heart style={{    width: '35%',*/}
                  {/*    padding: '0'}}/>*/}
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
          <Cart />
        </div>

        <div style={{ width: '65%' }}>
          <Card>
            <Card.Body style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <h5 className="single-product-title">Code</h5>
                <p className="single-product-text">{single.code}</p>
              </div>
              <div style={{ width: '50%' }}>
                <h5 className="single-product-title">Brand</h5>
                <p className="single-product-text">{single.brand}</p>
              </div>
            </Card.Body>
            {/*<Card.Footer>*/}
            {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
            {/*</Card.Footer>*/}
          </Card>
        </div>
      </Container>
    </Fragment>
  );
};

Product.propTypes = {
  history: PropTypes.shape(),
};
export default Product;
