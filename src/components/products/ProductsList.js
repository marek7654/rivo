import { useState } from 'react';
import { Link } from 'react-router-dom';

import starImg from '../../images/fi-ss-star.svg';
import Button from '../../UI/Button';
import classes from './ProductsList.module.css';

const ProductsList = (props) => {
  const [products, setProducts] = useState(props.products || []);

  const seeAllclickHandler = (e) => {
    e.preventDefault();
    console.log('see all');
  };

  return (
    <>
      <ul className={classes.list}>
        {products.map((product) => (
          <li className={classes.listItem} key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <h4 className={classes.title}>{product.title}</h4>
              <div className={classes.details}>
                <div>${product.price}</div>
                <div>
                  {product.rating.rate}
                  <img className={classes.star} src={starImg} alt='star' />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Button title='See all ➞' onClickHandler={seeAllclickHandler} />
    </>
  );
};

export default ProductsList;
