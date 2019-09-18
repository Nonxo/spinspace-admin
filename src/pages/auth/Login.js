import React from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import useForm from '../../utils/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { Login as loginAction } from '../../middleware/action/Auth.action';
import Logo from '../../assets/images/logo.svg';
import '../../assets/scss/pages/login.scss';

const Login = (props) => {
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const {history} = props;

    const submit = () => {
        dispatch(loginAction(inputs, history))
    }

    const { handleChange, handleSubmit, inputs } = useForm(submit);

    return (
        <React.Fragment>
            <Container className="full-height">
                <Row className="justify-content-center align-items-center h-100">
                    <Col md={5} className="text-left">
                        <div className="text-center mb-4">
                            <Image src={Logo} />
                        </div>
                        <h5 className="font-weight-bold mb-4">Welcome Back!</h5>
                        <Form onSubmit={handleSubmit} className="img-fluid">
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" required onChange={handleChange} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" required onChange={handleChange} />
                            </Form.Group>

                            <Button variant="primary" size="lg" type="submit" block disabled={!inputs.email || !inputs.password || (auth && auth.loggingIn)}>
                                {auth && auth.loggingIn ?
                                    (<React.Fragment><Spinner as="span" animation="grow" size="sm" variant="light" /> Connecting...</React.Fragment>) : 'Login'
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Login;
