import { Row, Card, Form, Button } from 'react-bootstrap';

function Register() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicFirst">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Firstname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLast">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Lastname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUser">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Control type="password" placeholder="repeat Password" />
                    </Form.Group>
                    <Row>
                    <Button variant="primary" type="submit" className="col-6">
                        Register
                    </Button>
                    <Form.Label className="col-6">
                        <a href="/login">Login</a>
                    </Form.Label>
                    </Row>
                    </Form>
                </Card.Body>
            </Card>);
}

export default Register;