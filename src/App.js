import './App.css';
import './scss/main.scss';
import { createContext, useState } from 'react';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import GamePage from './pages/GamePage';
import Hooks from './pages/Hooks';

const components = {
  home: <Home />,
  game: <GamePage />,
  hooks: <Hooks />
}

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John Doe', role: 'admin' });

  const [activePage, setActivePage] = useState('game');

  const DisplayPage = () => components[activePage];

  return (
    <UserContext.Provider value={user} >
      <div className="App">
        <Header setActivePage={setActivePage}/>
        <DisplayPage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
