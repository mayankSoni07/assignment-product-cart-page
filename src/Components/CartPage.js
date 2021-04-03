import '../Style/CartPage.css';

function CartPage(props) {
  const { cartData, setCartData, showErrorSuccessMessage } = props;

  const onRemoveFromCart = (item) => {
    if (cartData[item._id]) {
      let tempCartData = { ...cartData };
      delete tempCartData[item._id];
      setCartData({ ...tempCartData });
      showErrorSuccessMessage('success', 'Product removed from Cart.');
    } else {
      showErrorSuccessMessage('error', 'Product not availabe in Cart.');
    }
  }

  return (
    <div className="card-container">
      <h2>CART</h2>
      {cartData && Object.keys(cartData).map((id) => {
        return <div className="card-wrapper" key={cartData[id]._id}>
          <div><b>ID:</b> {cartData[id]._id}</div>
          <div><b>Title:</b> {cartData[id].title}</div>
          <div><b>Price:</b> {cartData[id].prince}</div>
          <div><b>Description:</b> {cartData[id].description}</div>
          <div><b>Available Sizes:</b> {cartData[id].availableSizes.join(', ')}</div>
          <div className="button-wrapper">
            <button className="btn-remove-cart" onClick={() => onRemoveFromCart(cartData[id])}>Remove from Cart</button>
          </div>
        </div>
      })}
    </div>
  );
}

export default CartPage;
