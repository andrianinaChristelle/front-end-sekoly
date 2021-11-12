import React from "react";
import { useState, useContext, useEffect } from "react";
import Auth from "../../contexts/Auth";
import { login } from "../../services/AuthAp";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Login = ({ history }) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await login(user);
            setIsAuthenticated(response);
            console.log(response);
            history.push("/");
        } catch ({ response }) {
            console.log(response);
        }
    }
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }
    useEffect(() => {
        if (isAuthenticated) {
            history.replace('/account');
        }

    }, [history, isAuthenticated]);
    return (
        <div className="login-wrapper">

            <Container>
                <Row>
                    <Col xs={12} md={5}>
                    </Col>
                    <Col xs={12} md={4}>
                        <h1>Login</h1><br />
                        <form onSubmit={handleSubmit}>
                            <label>
                                <h5>email</h5>
                                <input
                                    type="text"
                                    name='email'
                                    className="form-control"
                                    id="email"
                                    placeholder="mail@mail"
                                    onChange={handleChange}
                                />
                            </label><br />
                            <label>
                                <h5>password</h5>
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    id="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                />
                            </label><br /><br />
                            <div>
                                <Button center type="submit">se connecter</Button>
                            </div>
                        </form>
                    </Col>
                    <Col xs={12} md={3}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;