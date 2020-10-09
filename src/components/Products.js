import React, { Fragment } from 'react';
import '../App.css';
import { Container, CardDeck, Card } from 'react-bootstrap';
import NavBar from './NavBar';
import { ProductData } from '../utils/ProductData';
import { Link } from 'react-router-dom';
import libs from './libs';

function Products() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <CardDeck style={{ marginTop: '2%' }}>
          {ProductData.map((product) => (
            <div key={product.id} style={{ width: '25%' }}>
              <Link
                style={{
                  textDecoration: 'none',
                  // backgroundColor: 'rgb(1, 136, 73)',
                  color: 'black',
                  // borderColor: 'rgb(1, 136, 73)'
                }}
                to={{
                  pathname: `/product/${product.name.replace(/ /g, '-').toLowerCase()}`,
                  state: {
                    product,
                  },
                }}
              >
                <Card style={{ margin: '5%' }}>
                  <Card.Img style={{ height: '20rem' }} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>
                      <p className="product-name">{product.name}</p>
                    </Card.Title>
                    <Card.Text>
                      <p className="product-price">{libs.formatCurrency(product.price)}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </CardDeck>
      </Container>
    </Fragment>
  );
}

export default Products;
