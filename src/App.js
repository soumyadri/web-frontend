import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/Home/HomePage/HomePage';
import { Register } from './containers/Registration/Register';
import { LoginContainer } from './containers/Login/LoginContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;