import logo from './logo.svg';
import './App.css';
import Main from './module/Main';
import Home from './module/home';
import Login from './module/Authentication/Login';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Leecord" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
