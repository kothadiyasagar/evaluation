import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Codeforinterview from './components/Codeforinterview';
import AllUsers from './components/AllUsers';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import EdditUser from './components/EdditUser';
import {Loginpage} from "./components/Loginpage"
import {Signuppage} from "./components/Signuppage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
        <Route path='/' element={<Codeforinterview/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>}/>     
        <Route path='/edit/:id' element={<EdditUser/>} />  </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
