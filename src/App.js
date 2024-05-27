import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages:
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import LogIn from './pages/login/LogIn';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
