import React from "react";
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import Auth from "../contexts/Auth";
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
    const { isAuthenticated } = useContext(Auth);
    return (
        <Nav
        // activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >

            {(!isAuthenticated && (
                <>
                    <Nav.Item>
                        <Nav.Link href="/">Connrction</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/profile' eventKey="link-1">profile</Nav.Link>
                    </Nav.Item>
                </>
            )) || (
                    <>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/profile' eventKey="link-1">profile</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/Listefiliere">Filiere</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/ListeEleveEconoma">
                                Economa
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Mon compte
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Deconnection
                            </Nav.Link>
                        </Nav.Item>
                    </>
                )}
        </Nav>
    );
}

export default Navbar;