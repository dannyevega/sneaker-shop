import React, { Component } from 'react';
import Columns from './Columns';
import Title from '../Title';
import Empty from './Empty';
import CartProducts from './CartProducts';
import Total from './Total';
import { SneakerConsumer } from '../../context';

class Cart extends Component {
  render() {
    return (
      <section>
        <SneakerConsumer>
          {value => {
            return value.cart.length > 0 ? (
              <>
                <Title name='your' title='cart' />
                <Columns />
                <CartProducts value={value} />
                <Total value={value} />
              </>
            ) :
            (
              <Empty />
            )
          }}
        </SneakerConsumer>
      </section>
    );
  }
}

export default Cart;