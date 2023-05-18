import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';

import CartMenu from '../cart-menu';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

import './style.css';
import ItemsInCart from '../items-in-cart';
import { useNavigate } from 'react-router-dom';



const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

	const cart = useSelector(state => state.cart.itemsInCart);


	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false);
		navigate('/order');
	}, [navigate]);

	return (
		<div className="cart-block">
			<ItemsInCart quantity={cart.length} />

			<BiCartAlt size={25} className='cart-icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />

			{calcTotalPrice(cart) > 0 ? <span className="total-price">{calcTotalPrice(cart)} грн.</span> : null}

			{isCartMenuVisible && <CartMenu cart={cart} onClick={handleClick} />}
		</div>
	);
}

export default CartBlock;