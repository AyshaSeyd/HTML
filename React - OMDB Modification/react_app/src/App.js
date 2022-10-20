import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import Poke from './Poke';
import Counter from './Counter';
import OMDB from './OMDB';
import Home from './Home';
import Navigation from './Navigation';
import ParamsExample from './ParamsExample';
import FilmDetails from './FilmDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Container>
            <Row>
              <Col>
                <Nav.Link href="/home">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Link to="/liftingState">
                  <Button variant="primary" type="button">Lifting State</Button>
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/state">
                  State
                </Link>
              </Col>
              <Col>
                <Link to="/staticData">
                  Static Data
                </Link>
              </Col>
              <Col>
                <Link to="/dataRequests/example">
                  Data Req - Example
                </Link>
              </Col>
              <Col>
                <Link to="/filmSearch">
                  Film Search
                </Link>
              </Col>
              <Col lg={3}>
                <Navigation />
              </Col>
            </Row>
          </Container>

        </Nav>
        <br />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/state" element={<Counter />} />
          <Route path="/dataRequests/example" element={<Poke />} />
          <Route path="/filmSearch" element={<OMDB />} />
          <Route path="/filmDetails/:id" element={<FilmDetails />} />
          <Route path="/params/:colour" element={<ParamsExample />} />
        </Routes>
      </Router>
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
    </div>
  );
}

export default App;