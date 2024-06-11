

const ProductCart = ({ product, deleteProduct }) => {
  return (
    <div className="cart-product">
      <p className="cantidad">{product.quantity}</p>
      <p className="product">{product.title}</p>
      <span className="price">${product.price}</span>
      <i onClick={() => deleteProduct(product)} className="fa-solid fa-trash"></i>
    </div>
  )

}

export default ProductCart