import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav} from 'react-bootstrap';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import UserDetail from './components/UserDetail';
import MultiForm from './components/forms/MultiForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          
          <Nav className="me-auto nav-link">
            <Nav.Link as={Link} to="/user">SHOW API</Nav.Link>
            <Nav.Link  as={Link} to="/form">FORMS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      </>
      <div>
        <Routes>
          <Route path='/user' element={<UserDetail/>} /> 
          <Route path='/form' element={<MultiForm/>} /> 

        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
