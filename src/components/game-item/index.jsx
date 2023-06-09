import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import GameBuy from '../game-buy';
import GameCover from '../game-cover';
import GameGenre from '../game-genre';
import { setCurrentGame } from '../../store/slices/gamesSlice';

import './style.css';



const GameItem = ({ game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`);
	}

	return (
		<div className="game-item" onClick={handleClick}>
			<GameCover image={game.image} />
			<div className="game-item__details">
				<span className="game-item__title">{game.title}</span>
				<div className="game-item__genre">
					{game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
				</div>
				<div className="game-item__buy">
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
}

export default GameItem;