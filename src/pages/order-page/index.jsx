import { useSelector } from 'react-redux';

import OrderItem from '../../components/order-item';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { enumerate } from '../../utils/enumerate';

import './style.css';

const OrderPage = () => {
	const cart = useSelector(state => state.cart.itemsInCart);

	if (cart.length < 1) {
		return <h1>Ваша корзина порожня</h1>
	}

	return (
		<div className="order-page">

			<div className="order-page__left">
				{cart.map(game => <OrderItem key={game.id} game={game} />)}
			</div>

			<div className="order-page__right">
				<div className="order-page__total-price">
					<span>
						{cart.length} {enumerate(cart.length, ['товар', 'товара', 'товарів'])} на суму {calcTotalPrice(cart)} грн.
					</span>
				</div>
			</div>

		</div>
	);
}

export default OrderPage;