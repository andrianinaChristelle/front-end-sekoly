import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EleveService from '../../services/ServicesEleve';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './economa.css';
export default function ListeEleveFiliere() {

    const [eleve, setEleve] = useState([]);
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    // event.preventDefault();
    useEffect(() => {
        EleveService.getEleve()
            .then(res => {
                const listeEleve = res.data.InformationEleve;
                setEleve({ listeEleve });
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    const navigateUpdate = (id) => {
        history.push(
            '/InscriptionEleve/' + id,

        )
    }
    return (
        <>
            <div className="wrapper">
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/InsertEleve">Nouveau Eleve</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {eleve?.listeEleve?.map(el => < tr >
                            <td >{el.num_matricule}</td>
                            <td >{el.first_name}</td>
                            <td >{el.last_name}</td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(el?.id)}>Inscription</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(el?.id)}>payer ecolage</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(el?.id)}>frais divers</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>
    )
}