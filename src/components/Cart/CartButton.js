import classes from './CartButton.module.css';
import { uiAction } from '../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch()
 const quantity= useSelector(state=>state.cart.totalQuantity)
  const toggleHandler=()=>{
dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
