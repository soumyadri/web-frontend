import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/Home/HomePage/HomePage';
import { Register } from './containers/Registration/Register';
import { LoginContainer } from './containers/Login/LoginContainer';
import { StudentDashboard } from './containers/StudentDashboard/StudentDashboard';
import { ExamDashboard } from './containers/ExamDashboard/ExamDashboard';
import { TeacherDashboard } from './containers/TeacherDashboard/TeacherDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/student' element={<StudentDashboard />} />
          <Route path='/exampage' element={<ExamDashboard />} />
          <Route path='/teacherPortal' element={<TeacherDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;