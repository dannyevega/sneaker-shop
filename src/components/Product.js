import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SneakerConsumer } from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <SneakerWrapper className='col-9 col-md-6 col-lg-3 my-3 mx-auto'>
        <div className='card'>
          <SneakerConsumer>
            {value => (
              <div className='img-container p-5' onClick={() => value.getDetails(id)}>
                <Link to='/details'>
                  <img src={img} alt='sneaker' className='card-img-top' />
                </Link>

                <button
                  className='card-btn'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className='text-uppercase mb-0'>{''} in cart</p>
                  ) : (
                    <i className='fas fa-shopping-cart' />
                  )}
                </button>
              </div>              
            )}
          </SneakerConsumer>
          <div className='card-footer d-flex justify-content-between'>
              <p className='align-self-center mb-0'>{title}</p>
              <h3 className='text-green font-italic mb-0'>
                <span className='mr-1'>$</span>
                {price}
              </h3>
          </div>
        </div>
      </SneakerWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.boolean,
  }).isRequired
}

const SneakerWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all .5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--secondGreen);
    border: none;
    color: var(--light);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .5s linear;
  }
  .card-btn:hover {
    cursor: pointer;
    color: var(--mainGreen);
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
`

export default Product;