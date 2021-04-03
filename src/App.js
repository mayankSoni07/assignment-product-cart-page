import './Style/App.css';

import React, { useState } from 'react';

import ProductPage from './Components/ProductPage';
import CartPage from './Components/CartPage';
import PRODUCT_DATA from './Mock/mock.json';

function App() {
  const [cartData, setCartData] = useState({});

  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const showErrorSuccessMessage = (type, msg) => {
    if(type === 'success'){
      setSuccessMessage(msg)
      setTimeout(()=>{
        setSuccessMessage();
      },2000)
    } else {
      setErrorMessage(msg);
      setTimeout(()=>{
        setErrorMessage();
      },2000)
    }
  }
  
  return (
    <>
      <div className="wrapper">
        <div className="productPageWrapper">
          <ProductPage
            productData={PRODUCT_DATA} cartData={cartData} setCartData={setCartData}
            showErrorSuccessMessage={showErrorSuccessMessage}
          />
        </div>
        <div className="cartPageWrapper">
          <CartPage
            cartData={cartData} setCartData={setCartData}
            showErrorSuccessMessage={showErrorSuccessMessage}
          />
        </div>
      </div>
      {errorMessage && <div className="error_message">{errorMessage}</div>}
      {successMessage && <div className="success_message">{successMessage}</div>}
    </>
  );
}

export default App;
