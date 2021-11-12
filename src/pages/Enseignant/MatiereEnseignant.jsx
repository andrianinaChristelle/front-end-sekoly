import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EnseignantService from '../../services/ServiceEnseignant';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import './Enseignant.css';

export default function MatiereEnseignant() {
    const [matiere, setMatiere] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState("");

    useEffect(() => {
        let id = localStorage.getItem('idEnseignant');
        EnseignantService.getMatiereEnseigner(id)
            .then(res => {

                const matieres = res.data.matiere;
                setMatiere({ matieres });
                console.log(res.data.matiere);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    const handleSearch = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearch(value);
    }
    const navigateUpdate = (id) => {
        localStorage.setItem('idEnseignant', id);
        console.log(id);
        history.push(
            '/FicheEnseignant'
        )
    }
    return (
        <>
            <div className="wrapper">
                <h1>Matiere a enseigner</h1>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>filiere</th>
                            <th>niveau </th>
                        </tr>
                    </thead>
                    <tbody>
                        {matiere?.matieres?.map(mat => < tr >
                            <td >{mat.code_matiere} </td>


                            <td >{mat.niveau} </td>
                            <td >{mat.filiere} </td>
                            {/* <td >{eleve.Groupe} </td>
                            <td >{eleve.id_eleve} </td> */}
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(mat.id)}>Modifier</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(mat.id)}>suprimer</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(mat.id)}>ajouter note</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>

    )
}
