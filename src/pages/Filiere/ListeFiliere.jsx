import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ServiceFiliere from '../../services/ServiceFiliere';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './filiere.css';

export default function Listefiliere() {
    const [Filiere, setFiliere] = useState([]);
    const history = useHistory();

    useEffect(() => {

        ServiceFiliere.getFiliere()
            .then(res => {

                const pays = res.data.Filiere;
                setFiliere({ pays });
                console.log(res.data.Filiere);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });



    }, []);
    const navigateUpdate = (id) => {
        history.push(
            '/listeNiveau',
            {
                filiere_id: id,
            }
        )
    }
    return (
        <>
            <div className="wrapper">
                <h1> Les filieres</h1>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/NouveauFiliere">Insert Filier</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Filiere</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Filiere?.pays?.map(fil => < tr >
                            <td key={{ fil }} >{fil.id}</td>
                            <td >{fil.Filiere}</td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(fil.id)}>voir les niveau</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>

    )
}
