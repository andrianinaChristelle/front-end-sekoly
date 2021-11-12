import React, { useState, useEffect } from 'react';
import EnseignantService from '../../services/ServiceEnseignant';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

import './Enseignant.css';


export default function HeaderEnseignant() {
    const [enseignant, setEnseignant] = useState([]);
    useEffect(() => {
        let id = localStorage.getItem('idEnseignant');
        EnseignantService.getEnseignantById(id)
            .then(res => {
                const ensei = res.data.enseignant[0];
                setEnseignant(ensei);
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
                    <h3>Detail de {enseignant?.nom} </h3>
                    <h3>{enseignant?.prenom}</h3>
                    <hr
                        style={{
                            color: 'green',
                            backgroundColor: 'green',
                            height: 5
                        }}
                    />
                </ul>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/MatiereEnseignant">Liste matiere</Navbar.Brand>
                        </Container>
                        <Container>
                            <Navbar.Brand href="/NouveauFiliere">EDT</Navbar.Brand>
                        </Container>
                        <Container>
                            <Navbar.Brand href="/NouveauFiliere">Fiche de presence</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>

            </div>
        </>);
}