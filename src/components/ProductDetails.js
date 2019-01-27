import React, { Component } from 'react';
import { SneakerConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Button } from './Button';

class ProductDetails extends Component {
  render() {
    return (
      <SneakerConsumer>
        {value => {
          const { id, description, title, img, price, brand, inCart } = value.detailed;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-uppercase text-green my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt='sneaker' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3 text-uppercase'>
                  <h2>model: {title}</h2>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by: <span className='text-uppercase'>{brand}</span>
                  </h4>
                  <h4 className='text-green'>
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-uppercase font-weight-bold mt-3 mb-0'>
                    description:
                  </p>
                  <p className='text-muted lead'>{description}</p>
                  <div>
                    <Link to='/'>
                      <Button>
                        Back To Sneakers
                      </Button>
                    </Link>
                    <Button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'in cart' : 'add to cart'}
                    </Button>
                  </div>
                </div>                
              </div>
            </div>
          )
        }}
      </SneakerConsumer>
    );
  }
}

export default ProductDetails;