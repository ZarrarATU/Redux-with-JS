

function Products({ products }) {
  return (
    <div className='products'>
      {products.length > 0 ? products.map(product => {
        return <div key={product.id} className="product">
          <h3 className="title">{product.title}</h3>
          <img src={product.img} />
          <p className="description">{product.description}</p>
          <p className="price">{product.price} || {product.currency}</p>
          <p className="brand">{product.brand}</p>
        </div>
      }) : 'NO PRODUCT FOUND'}
    </div>
  )
}

export default Products