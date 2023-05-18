import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { deleteItemInCart } from '../../store/slices/cartSlice';

import './style.css';



const CartItem = ({ title, price, id }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(deleteItemInCart(id))
	}

	return (
		<div className="cart-item">
			<span>{title}</span>
			<div className="cart-item__price">
				<span>{price} грн.</span>
				<AiOutlineCloseCircle
					size={15}
					className="cart-item__delete-icon"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}

export default CartItem;