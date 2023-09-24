import { Suspense } from 'react';
import { defer, json, useLoaderData, Await } from 'react-router-dom';

import { loadProducts } from '../../store/store';
import ProductsList from './ProductsList';
import classes from './ProductsSection.module.css';

const ProductsSection = () => {
  const { products } = useLoaderData();

  return (
    <section className={classes.section}>
      <div className='container'>
        <h2 className={classes.header}>Best selling</h2>
        <p className={classes.description}>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={products}>
            {(loadedProducts) => <ProductsList products={loadedProducts} />}
          </Await>
        </Suspense>
        <ProductsList />
      </div>
    </section>
  );
};

export default ProductsSection;

export const productsLoader = () => {
  return defer({
    products: loadProducts(),
  });
};
