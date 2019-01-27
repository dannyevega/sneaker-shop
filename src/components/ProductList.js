import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { SneakerConsumer } from '../context';

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name='available' title='sneakers'/>
            <div className="row">
              <SneakerConsumer>
                {value => {
                  return value.sneakers.map(sneaker => {
                    return <Product key={sneaker.id} product={sneaker}/>
                  })
                }}
              </SneakerConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;