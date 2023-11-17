import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Container from './routes/Container';
import LoginPage from './Components/LoginPage';
import ClubProfile from './Components/ClubProfile';
import ClubCreation from './Components/ClubCreation';
import ClubJoin from './Components/ClubJoin';
import requireAuth from './Components/requireAuth';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={'about'} element={<About />} />
        <Route path={'club-profile'} element={<ClubProfile />} />
        <Route path={'club-creation'} element={<ClubCreation />} />
        <Route path={'club-join'} element={<ClubJoin />} onEnter={requireAuth}/>
      </Route>
      <Route path={'login'} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
