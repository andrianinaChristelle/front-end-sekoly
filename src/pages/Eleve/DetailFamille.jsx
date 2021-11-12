import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import { Container, Row, Col } from 'react-bootstrap';
import FamilleService from '../../services/ServiceFamille';

export default function FicheEleve() {
    const [famille, setFamille] = useState();
    useEffect(() => {
        FamilleService.getFamille()
            .then(res => {

                const family = res.data.InformationEleve[0];
                setFamille({ family });
                console.log(res.data.InformationEleve);
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

                        </Col>
                        <Col xs={12} md={6}>

                        </Col>

                    </Row>
                </Container>
            </div>
        </>);
}