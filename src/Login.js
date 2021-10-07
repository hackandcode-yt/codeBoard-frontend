import { Row, Card, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Form method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <Row>
                    <Button variant="primary" type="submit" className="col-6">
                        Login
                    </Button>
                    <Form.Label className="col-6">
                        <a href="/register">Register</a>
                    </Form.Label>
                    </Row>
                    </Form>
                </Card.Body>
            </Card>);
}

export default Login;