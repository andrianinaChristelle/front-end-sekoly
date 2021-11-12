import React, { useState, useEffect } from 'react';
import EleveService from '../../services/ServicesEleve';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import './Eleve.css';


export default function () {
    const [eleve, setEleve] = useState([]);
    useEffect(() => {
        let id = localStorage.getItem('idEleve');
        EleveService.getFiliereEleve(id)
            .then(res => {
                const elev = res.data.InformationEleve;
                console.log(elev.length);
                let tailleMax = elev.length - 1;
                setEleve(elev[tailleMax]);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="header">
                <ul>
                    <h3>Detail de {eleve?.first_name} </h3>
                    <h3>{eleve?.first_name}</h3>
                    <hr
                        style={{
                            color: 'green',
                            backgroundColor: 'green',
                            height: 5
                        }}
                    />
                    <li><p>filiere :{eleve?.Filiere}</p></li>
                    <li><p>Niveau :{eleve?.niveau}  </p></li>
                </ul>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/NouveauFiliere">Situation Ecolage</Navbar.Brand>
                        </Container>
                        <Container>
                            <Navbar.Brand href="/MatiereEnseignant">Releve des notes</Navbar.Brand>
                        </Container>
                        <Container>
                            <Navbar.Brand href="/NouveauFiliere">Fiche Eleve</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
                {/* <Container>
                    <Row>
                        <Col> </Col>
                        <Col><Button variant="outline-info"><Link to={{
                            // pathname: "/SituationPaye",
                            // state: {
                            //     id_eleves: props?.id_eleves,
                            // },
                        }}>Situation Ecolage</Link></Button></Col>
                        <Col><Button variant="outline-info"><Link to={{
                            pathname: "/ListeEleve"
                        }}>Liste</Link></Button></Col>
                        <Col><Button variant="outline-info"><Link to={{
                            // pathname: "/FicheEleve",
                            // state: {
                            //     matriculeEleve: props?.id_eleves,
                            // },
                        }}>Fiche Eleve</Link> </Button></Col>
                        <Col><Button variant="outline-info">Releve des notes </Button></Col>
                        <Col><Button variant="outline-info" >Historique </Button></Col>
                    </Row>
                </Container> */}
            </div>
        </>);
}