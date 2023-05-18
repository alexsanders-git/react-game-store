import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header';
import HomePage from './pages/home-page';
import GamePage from './pages/game-page';
import OrderPage from './pages/order-page';
import { store } from './store';



function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>

        </div>
      </Router>
    </Provider>
  )
}

export default App
