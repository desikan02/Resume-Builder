import './App.css';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Professional from './components/professional'
import Professionalpdf from './components/Professionalpdf'
function App() {
  return (
    <Container fluid className="bg-lightgreen p-6 bg">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={ <Login/> } exact></Route>
        
        <Route path='/student' element={<Resume />} ></Route>
        <Route path='/professional' element={<Professional/>} ></Route>
        <Route path="/studentpdf" element={<PdfComponent/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/professionalpdf" element={<Professionalpdf/>}></Route>
      </Routes>
      
      

    </Container>
  );
}

export default App;
