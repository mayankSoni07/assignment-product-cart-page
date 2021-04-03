import '../Style/ProductPage.css';

function ProductPage(props) {
  const { productData, cartData, setCartData, showErrorSuccessMessage } = props;
  const onAddToCart = (item) => {
    if (!cartData[item._id]) {
      let tempCartData = { ...cartData };
      tempCartData[item._id] = item;
      setCartData({ ...tempCartData });
      showErrorSuccessMessage('success', 'Product successfully added into Cart.');
    } else {
      showErrorSuccessMessage('error', 'Product already added in Cart.');
    }
  }

  return (
    <div className="card-container">
      <h2>SHOPPING</h2>
      {productData && productData.products.map((item, index) => {
        return <div className="card-wrapper" key={item._id}>
          <div><b>ID:</b> {item._id}</div>
          <div><b>Title:</b> {item.title}</div>
          <div><b>Price:</b> {item.prince}</div>
          <div><b>Description:</b> {item.description}</div>
          <div><b>Available Sizes:</b> {item.availableSizes.join(', ')}</div>
          <div className="button-wrapper">
            <button className="btn-add-cart" onClick={() => onAddToCart(item)}>Add to Cart</button>
          </div>
        </div>
      })}
    </div>
  );
}

export default ProductPage;
