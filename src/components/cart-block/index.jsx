import { BiCartAlt } from 'react-icons/bi';

import './style.css';



const CartBlock = () => {
	return (
		<div className="cart-block">
			<BiCartAlt size={25} className='cart-icon' />
			<span className="total-price">123 грн.</span>
		</div>
	);
}

export default CartBlock;