import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Container from './routes/Container';
import LoginPage from './Components/LoginPage';
import ClubProfile from './Components/ClubProfile';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={'about'} element={<About />} />
        <Route path={'club-profile'} element={<ClubProfile />} />
      </Route>
      <Route path={'login'} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
