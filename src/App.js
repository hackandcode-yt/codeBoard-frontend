import './App.css';
import logo from './img/logo-placeholder.png';
import Login from './Login';
import Register from './Register';
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid className="App-header">
        <Row>
          <img src={{logo}} height="150rem"/>
        </Row>
        <Row>
          <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        </Row>
      </Container>

      
    </Router>
  );
}

export default App;
