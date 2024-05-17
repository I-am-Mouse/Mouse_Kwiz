
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/homePage';
import QuestionPage from './components/questionPage';
import QuestionCreation from './components/questionCreation';
import AdminSignup from './components/adminSignUp';
import AdminLogin from './components/adminLogin';
import ResultPage from './components/resultPage';
import AdminProfile from './components/adminProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path='/questionpage/:topic' Component={QuestionPage}></Route>
        <Route path='/questioncreation' Component={QuestionCreation}></Route>
        <Route path='/resultpage' Component={ResultPage}></Route>
        <Route path='/signup' Component={AdminSignup}></Route>
        <Route path='/login' Component={AdminLogin}></Route>
        <Route path='/profile' Component={AdminProfile}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
