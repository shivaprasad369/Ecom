import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../store/cart-slice';
import {  useParams } from 'react-router-dom';

const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch= useDispatch()
const addToCartHandler=()=>{
  dispatch(cartAction.addItemTocart({id,title,price}))
}
const params=useParams()
const ids=params.productId;
  return (
    <li className={classes.item}>
      <Card>
     
        <header>
          <h3><a href={ids}>{title}</a></h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>

      </Card>
    </li>
  );
};

export default ProductItem;
