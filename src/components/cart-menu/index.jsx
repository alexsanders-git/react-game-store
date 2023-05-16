import Button from '../button';
import CartItem from '../cart-item';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

import './style.css';



const CartMenu = ({ cart, onClick }) => {
	return (
		<div className="cart-menu">
			<div className="cart-menu__game-list">
				{cart.length > 0
					? cart.map(game => (
						<CartItem key={game.id} title={game.title} price={game.price} id={game.id} />
					)) : 'Корзина пуста'}

				{
					cart.length > 0 ?
						<div className="cart-menu__arrange">
							<div className="cart-menu__total-price">
								<span>Разом:</span>
								<span>{calcTotalPrice(cart)} грн.</span>
							</div>
							<Button type='primary' size='m' onClick={onClick}>
								Оформити замовлення
							</Button>
						</div>
						: null
				}

			</div>
		</div>
	);
}

export default CartMenu;