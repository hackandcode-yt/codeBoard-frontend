import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App-header">
      <Row className="justify-content-md-center">
        <Register/>
      </Row>
    </Container>
  );
}

export default App;
