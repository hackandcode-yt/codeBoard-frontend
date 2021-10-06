import { Card, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Form>
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
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    </Form>
                </Card.Body>
            </Card>);
}

export default Login;