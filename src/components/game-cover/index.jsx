import './style.css';



const GameCover = ({ image = '' }) => {
	return (
		<div
			className="game-cover"
			style={{ backgroundImage: `url(${image})` }}
		/>
	);
}

export default GameCover;