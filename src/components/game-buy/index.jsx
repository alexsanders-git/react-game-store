import { useDispatch, useSelector } from 'react-redux';

import Button from '../button';
import { setItemInCart, deleteItemInCart } from '../../store/slices/cartSlice';

import './style.css';



const GameBuy = ({ game }) => {
	const cart = useSelector(state => state.cart.itemsInCart);

	const isItemsInCart = cart.some(item => item.id === game.id);

	const dispatch = useDispatch();

	const setItemInCartHandler = e => {
		e.stopPropagation();
		if (isItemsInCart) {
			dispatch(deleteItemInCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
	}

	return (
		<div className="game-buy">
			<span className="game-buy__price">{game.price} грн.</span>
			<Button
				type={isItemsInCart ? 'secondary' : 'primary'}
				onClick={setItemInCartHandler}
			>
				{isItemsInCart ? 'Видалити з корзини' : 'В корзину'}
			</Button>
		</div>
	);
}

export default GameBuy;