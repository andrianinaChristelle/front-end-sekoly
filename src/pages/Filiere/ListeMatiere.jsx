import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ServiceFiliere from '../../services/ServiceFiliere';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import './filiere.css';

export default function ListeMatiere() {
    const [Matiere, setMatiere] = useState([]);
    const [session, setSession] = useState([]);
    const [session_id, setSessionId] = useState();

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        let state = location?.state;
        let id_filiere = state?.id_Niveau_Filiere;
        ServiceFiliere.getMatiere(id_filiere)
            .then(res => {

                const matieres = res.data.matiere;
                setMatiere({ matieres });
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        ServiceFiliere.getSession()
            .then(res => {

                const sessions = res.data.session;
                setSession({ sessions });
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }, []);
    const navigateUpdate = (id_filiere, id_niveau, id_session, matiereId) => {
        console.log(matiereId);
        history.push(
            '/ListeEleveFiliere',
            {
                filiere: id_filiere,
                niveau: id_niveau,
                sess: id_session,
                mat: matiereId,
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
                            <th>session</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Matiere?.matieres?.map(mat => < tr >
                            <td >{mat.id}</td>
                            <td >{mat.code_matiere}</td>


                            <td> <select onChange={e => setSessionId(e.target.value)}>
                                {session?.sessions?.map(sess =>
                                    <option value={sess.id}>{sess.date_debut}//{sess.date_fin}</option>
                                )}
                            </select></td>

                            <td><Button variant="outline-info" onClick={() => navigateUpdate(mat.id_filiere, mat.id_niveau, session_id, mat.id)}>ajouter note</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>

    )
}
