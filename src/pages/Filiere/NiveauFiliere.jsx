import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import FiliereService from '../../services/ServiceFiliere';
import './filiere.css';

export default function InsertEleve() {
    const location = useLocation();
    const history = useHistory();
    const [Filiere, setFiliere] = useState([]);
    // event.preventDefault();
    useEffect(() => {
        let state = location?.state;
        let id_filiere = state?.filiere_id;
        console.log(id_filiere);
        FiliereService.getNiveauFiliere(id_filiere)
            .then(res => {
                const listeNiveau = res.data.niveauFiliere;
                setFiliere({ listeNiveau });
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    const navigateUpdate = (idNiveauFiliere) => {
        history.push(
            '/ListeMatiere',
            {
                id_Niveau_Filiere: idNiveauFiliere
            }
        )
    }

    return (
        <div className="wrapper">
            <h1>filiere :{Filiere[0]?.listeNiveau[0]?.Filiere}</h1>
            <Table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Filiere</th>
                        <th>Niveau</th>
                        <th>Groupe</th>
                    </tr>
                </thead>
                <tbody>
                    {Filiere?.listeNiveau?.map(fil => < tr >
                        <td key={{ fil }} >{fil.id}</td>
                        <td >{fil.filiere}</td>
                        <td >{fil.niveau}</td>
                        <td><Button variant="outline-info" onClick={() => navigateUpdate(fil.id)}>Liste</Button></td>
                    </tr>)}
                </tbody>
            </Table >
        </div>
    )
}