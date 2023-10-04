import './App.css';
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
