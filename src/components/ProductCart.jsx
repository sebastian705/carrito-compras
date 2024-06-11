
const ProductCart = ({ cartProduct, deleteCartProduct }) => {
  return (
    <div className="cart-product">
      <p className="cantidad">{cartProduct.quantity}</p>
      <p className="product">{cartProduct.title}</p>
      <span className="price">${cartProduct.price}</span>
      <i onClick={() => deleteCartProduct(cartProduct)} className="fa-solid fa-trash"></i>
    </div>
  )

}

export default ProductCart