
const ProductCart = ({ cartProduct, deleteCartProduct }) => {
  return (
    <div className="cart-cartProduct">
      <p className="cantidad">{cartProduct.quantity}</p>
      <p className="cartProduct">{cartProduct.title}</p>
      <span className="price">${cartProduct.price}</span>
      <i onClick={() => deleteCartProduct(cartProduct)} className="fa-solid fa-trash"></i>
    </div>
  )

}

export default ProductCart