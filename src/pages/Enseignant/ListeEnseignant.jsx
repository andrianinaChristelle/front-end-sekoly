import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EnseignantService from '../../services/ServiceEnseignant';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './Enseignant.css';

export default function ListeEnseignant() {
    const [enseignant, setEnseignant] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState("");
    useEffect(() => {
        EnseignantService.getAllEnseignant()
            .then(res => {

                const enseignants = res.data.enseignant;
                setEnseignant({ enseignants });
                console.log(res.data.enseignant);
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
                <h1> Liste Enseignant</h1>
                <div class="input">
                    <input
                        type="text"
                        name="searchBar"
                        placeholder="Recherche"
                        onChange={handleSearch}
                    />
                </div>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom & Prenom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enseignant?.enseignants?.map(eleve => < tr >
                            <td key={{ eleve }} >{eleve.id}</td>

                            <td >{eleve.nom} &&  {eleve.prenom}</td>
                            {/* <td >{eleve.Groupe} </td>
                            <td >{eleve.id_eleve} </td> */}
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(eleve.id)}>Modifier</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(eleve.id)}>Detail Eleve</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>

    )
}
