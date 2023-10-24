import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT=[
  {
    id:'p1',
    title:'test',
    price:6,
    description:'This is a first product - amazing!'
  },
  {
    id:'p2',
    title:'Second',
    price:6,
    description:'This is a Second product - amazing!'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product)=>(<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
