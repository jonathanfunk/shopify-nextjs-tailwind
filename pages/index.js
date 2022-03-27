import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className='text-3xl'>
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps(context) {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
