import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

export default function App() {
  console.log('App component rendered');


  return (
    <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}