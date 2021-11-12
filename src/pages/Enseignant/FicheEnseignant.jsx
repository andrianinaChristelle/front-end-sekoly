import React, { Component, useState, useEffect } from 'react';
import Header from './HeaderEnseignant';
import { Container, Row, Col } from 'react-bootstrap';
import EnseignantService from '../../services/ServiceEnseignant';

export default function FicheEnseignant() {
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
            <Header />
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h3>Detail Enseignant</h3>
                            <p>nom :</p><br />
                            <p>prenom :</p><br />
                            <p>Anniversaire :</p><br />
                            <p>genre:</p><br />
                            <p>console.info(object) :</p><br />
                            <p>telephone :</p><br />

                        </Col>
                        <Col xs={12} md={6}>
                            <h3>test</h3>
                            <p>{enseignant?.nom}</p><br />
                            <p>{enseignant?.prenom}</p><br />
                            <p>{enseignant?.birthday}</p><br />
                            <p>{enseignant?.cin}</p><br />
                            <p>{enseignant?.phone_number}</p><br />

                        </Col>

                    </Row>
                </Container>
            </div>
        </>);
}