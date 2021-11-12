import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import FamilleService from '../../services/ServiceFamille';

export default function FicheEleve() {
    const [idEleve, SetIdEleve] = useState();
    const [eleve, setEleve] = useState([])
    useEffect(() => {
        const id = localStorage.getItem('idEleve');
        SetIdEleve(id);
        FamilleService.getFamille(id)
            .then(res => {
                const eleves = res.data.InformationFamille[0];
                setEleve({ eleves });
                console.log(res.data.InformationFamille);
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
                            <h3>Detail Eleve</h3>
                            <p>nom :</p><br />
                            <p>prenom :</p><br />
                            <p>Anniversaire :</p><br />
                            <p>lieu de naissance :</p><br />
                            <p>email :</p><br />
                            <p>nationalite :</p><br />
                            <hr
                                style={{
                                    color: 'green',
                                    backgroundColor: 'green',
                                    height: 5
                                }}
                            />
                            <h3>Detail Famille</h3>
                            <p>nom du Pere:</p><br />

                            <p>profession du pere :</p><br />
                            <p>Telephone pere :</p><br />
                            <p>nom de la mere :</p><br />
                            <p>profession mere :</p><br />
                            <p>telephone mere :</p><br />
                            <p>tuteur :</p><br />
                            <p>profession tuteur :</p><br />
                            <p>epoux :</p><br />
                            <p>profession epoux :</p><br />
                            <p>numero epoux :</p><br />
                        </Col>
                        <Col xs={12} md={6}>
                            <h3>test</h3>
                            <p>{eleve?.eleves?.last_name}</p><br />
                            <p>{eleve?.eleves?.first_name}</p><br />
                            <p>{eleve?.eleves?.birthday}</p><br />
                            <p>{eleve?.eleves?.birthday_place}</p><br />
                            <p>{eleve?.eleves?.email}</p><br />
                            <p>{eleve?.eleves?.nationalite}</p><br />
                            <hr
                                style={{
                                    color: 'green',
                                    backgroundColor: 'green',
                                    height: 5
                                }}
                            />
                            <h3>test</h3>

                            <p>{eleve?.eleves?.pere}</p><br />
                            <p>{eleve?.eleves?.profession_pere}</p><br />
                            <p>{eleve?.eleves?.number_phone_pere}</p><br />
                            <p>{eleve?.eleves?.mere}</p><br />
                            <p>{eleve?.eleves?.profession_mere}</p><br />
                            <p>{eleve?.eleves?.phone_number_mere}</p><br />
                            <p>{eleve?.eleves?.tuteur}</p><br />
                            <p>{eleve?.eleves?.profession_tuteur}</p><br />
                            <p>{eleve?.eleves?.epoux}</p><br />
                            <p>{eleve?.eleves?.professsion_epoux}</p><br />
                            <p>{eleve?.eleves?.num_epoux}</p><br />
                        </Col>

                    </Row>
                </Container>
            </div>
        </>);
}