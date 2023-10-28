import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Container from './routes/Container';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={'about'} element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
