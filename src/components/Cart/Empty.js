import React from 'react';

const Empty = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title'>
          <p className='text-uppercase'>your cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default Empty;