import './App.css';
// import Duration from './components/Duration/Duration';
// import Footer from './components/Footer/Footer';
// import Form from './components/Form/Form';
// import Hero from './components/HeroPage/Hero';
// import Overview from './components/Overview/Overview';
// import TopNav from './components/TopNav/TopNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/get-all-users-farmer714' element={<Users/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
