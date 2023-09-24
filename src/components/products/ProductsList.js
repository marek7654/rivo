import classes from './ProductsList.module.css';

const ProductsList = (props) => {
  const products = props.products || [];
  console.log('Products', products);

  return <ul className={classes.list}>
    {products.map(product => <li key={product.id}>
      {product.title}
    </li>)}
  </ul>
}

export default ProductsList;
