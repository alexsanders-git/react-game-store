import GameItem from '../../components/game-item';

import './style.css';


const GAMES = [
	{
		image: '/game-covers/forza_5.jpeg',
		title: 'Forza Horizon 5',
		genres: ['Race', 'Simulator', 'Open World'],
		price: 2343,
		video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
		id: 1,
		description: 'На Вас чекає нескінченний калейдоскоп пригод Horizon! Здійснюйте захоплюючі поїздки неймовірно красивим і самобутнім світом Мексики за кермом найбільших автомобілів в історії. Почніть свою пригоду Horizon вже сьогодні, додавши гру до свого списку бажань!',
	},
	{
		image: '/game-covers/battlefield_2042.jpg',
		title: 'Battlefield 2042',
		genres: ['Action', 'Shooter', 'War'],
		video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
		price: 2433,
		id: 2,
		description: 'Battlefield™ 2042 — це шутер від першої особи, в якій серія повертається до легендарних масштабних боїв. У майбутньому, де панує хаос, адаптуйтеся і процвітайте на полях бою, що постійно змінюються, завдяки своєму загону і арсеналу новітніх технологій.'
	},
	{
		image: '/game-covers/life_is_strange_true_colors.jpeg',
		title: 'Life is Strange True Colors',
		genres: ['Deep Story', 'Protagonist'],
		video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
		price: 3021,
		id: 3,
		description: 'Алекс Чень від усіх приховує своє «прокляття» — надприродну здатність зчитувати сильні емоції інших та впливати на них. Але коли її брат гине — нібито внаслідок нещасного випадку, Алекс використовує її, щоб дізнатися правду.'
	},
	{
		image: '/game-covers/gta_v.jpeg',
		title: 'Grand Theft Auto V',
		genres: ['Open World', 'Action'],
		video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
		price: 789,
		id: 4,
		description: 'Grand Theft Auto V для PC дозволяє гравцям дослідити знаменитий світ Лос-Сантоса та округу Блейн у роздільній здатності до 4k і вище з частотою 60 кадрів на секунду.'
	},
	{
		image: '/game-covers/rainbow_siege.jpeg',
		title: 'Tom Clancy\'s Rainbow Six® Siege',
		video: 'https://www.youtube.com/embed/6wlvYh0h63k',
		genres: ['Tactics', 'Shooter'],
		price: 982,
		id: 5,
		description: 'Tom Clancy\'s Rainbow Six Облога – це продовження гучного шутера від першої особи, розробленої студією Ubisoft Montreal.'
	},
	{
		image: '/game-covers/assassins_creed_valhalla.png',
		title: 'Assassin’s Creed Valhalla',
		genres: ['Parkour', 'RPG', 'Open World'],
		video: 'https://www.youtube.com/embed/ssrNcwxALS4',
		price: 2863,
		id: 6,
		description: 'Assassin’s Creed Valhalla — мультиплатформна гра в жанрі action/RPG, розроблена студією Ubisoft Montreal під видавництвом компанії Ubisoft. Є дванадцятою грою в серії ігор Assassin Creed.'
	},
]



const HomePage = () => {
	return (
		<div className="home-page">
			{GAMES.map(game => <GameItem game={game} key={game.id} />)}
		</div>
	);
}

export default HomePage;