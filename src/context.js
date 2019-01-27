import React, { Component } from 'react';
import { products, detailedProduct } from './data';

const SneakerContext = React.createContext();

// this.props.children to return all child components in app
class SneakerProvider extends Component {
  state = {
    sneakers: [],
    detailed: detailedProduct,
    cart: [],
    isModalOpen: false,
    modalSneaker: detailedProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount(){
    this.getSneakers();   
  }

  getSneakers = () => {
    let sneakers = [];
    products.forEach(sneaker => {
      const item = {...sneaker};
      sneakers = [...sneakers, item];
    });
    this.setState(() => {
      return { sneakers }
    });
  }

  getSneaker = (id) => {
    const product = this.state.sneakers.find(item => item.id === id);
    return product;
  }

  getDetails = (id) => {
    const sneaker = this.getSneaker(id);
    this.setState({
      detailed: sneaker
    })
  }

  openModal = (id) => {
    let sneaker = this.getSneaker(id);
    this.setState(() => {
      return {
        modalSneaker: sneaker,
        isModalOpen: true
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { isModalOpen: false }
    })
  }

  increment = (id) => {
    let cart = [...this.state.cart];
    const selectedSneaker = cart.find(sneaker => sneaker.id === id);
    const idx = cart.indexOf(selectedSneaker);
    let sneaker = cart[idx];
    sneaker.count = sneaker.count + 1;
    sneaker.total = sneaker.count * sneaker.price;
    this.setState(() => {
      return {
        cart: [...cart]
      };
    }, () => {
      this.calculateTotal();
    });
  }

  decrement = (id) => {
    let cart = [...this.state.cart];
    const selectedSneaker = cart.find(sneaker => sneaker.id === id);
    const idx = cart.indexOf(selectedSneaker);
    let sneaker = cart[idx];
    sneaker.count = sneaker.count - 1;
    if (sneaker.count === 0) {
      this.removeItem(id)
    } else {
      sneaker.total = sneaker.count * sneaker.price
      this.setState(() => {
        return {
          cart: [...cart]
        };
      }, () => {
        this.calculateTotal();
      });
    }
  }

  removeItem = (id) => {
    const sneakers = [...this.state.sneakers];
    let cart = [...this.state.cart];
    cart = cart.filter(sneaker => sneaker.id !== id);
    const idx = sneakers.indexOf(this.getSneaker(id));
    let removedSneaker = sneakers[idx];
    removedSneaker.inCart = false;
    removedSneaker.count = 0;
    removedSneaker.total = 0;
    this.setState(() => {
      return {
        sneakers: [...sneakers],
        cart: [...cart]
      };
    }, () => {
      this.calculateTotal();
    });
  }
  
  clearCart = () => {
    this.setState(() => {
      return {
        cart: []
      };
    }, () => {
      this.getSneakers();
      this.calculateTotal();
    });
  }

  addToCart = (id) => {
    let sneakers = [...this.state.sneakers];
    let idx = sneakers.indexOf(this.getSneaker(id));
    let sneaker = sneakers[idx];
    sneaker.inCart = true;
    sneaker.count = 1;
    const price = sneaker.price;
    sneaker.total = price;
    this.setState(
      () => {
        return {
          sneakers,
          cart: [...this.state.cart, sneaker]
        }
      },
      () => {
        this.calculateTotal();
      }
    )
  }

  calculateTotal = () => {
    const { cart } = this.state;
    let subtotal = 0;
    cart.map(sneaker => (subtotal += sneaker.total));
    const tax = parseInt((subtotal * 0.1).toFixed(2));
    const total = parseInt((subtotal + tax).toFixed(2));
    this.setState(() => {
      return {
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total        
      };
    });
  }

  render() {
    return (
      <SneakerContext.Provider value={{
        ...this.state,
        getDetails: this.getDetails,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </SneakerContext.Provider>
    );
  }
}

const SneakerConsumer = SneakerContext.Consumer;

export { SneakerProvider, SneakerConsumer };