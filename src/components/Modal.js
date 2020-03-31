import React, { Component } from 'react';
import styled from 'styled-components';
import { SneakerConsumer } from '../context';
import { Button } from './Button';
import { Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <SneakerConsumer>
        {value => {
          const { isModalOpen, closeModal } = value;
          const { img, title, price } = value.modalSneaker;

          if(!isModalOpen){
            return null;
          } else {
            return (
            <ModalContainer>
              <div className='container'>
                <div className='row'>
                  <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-uppercase'>
                    <h5>item added to da cart</h5>
                    <img src={img} className='img-fluid' alt='sneaker'/>
                    <h5>{title}</h5>
                    <h5 className='text-muted'>price: ${price}</h5>
                    <Link to='/sneaker-shop'>
                      <Button onClick={() => { closeModal() }}>
                        keep shopping
                      </Button>
                    </Link>
                    <Link to='/cart'>
                      <Button onClick={() => { closeModal() }}>
                        cart
                      </Button>
                    </Link>
                  </div>                
                </div>              
              </div>
            </ModalContainer>              
            )
          }
        }}
      </SneakerConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--light);
  }
`;

export default Modal;