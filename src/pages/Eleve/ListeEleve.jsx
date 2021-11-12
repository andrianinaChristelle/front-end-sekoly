import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ServicesEleve from '../../services/ServicesEleve';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './Eleve.css';

export default function ListeEleve() {
    const [eleves, setEleves] = useState([]);
    const history = useHistory();
    const [search, setSearch] = useState("");
    useEffect(() => {

        ServicesEleve.getInformationInscription()
            .then(res => {

                const eleve = res.data.InformationEleve;
                setEleves({ eleve });
                console.log(res.data.InformationEleve);
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
        localStorage.setItem('idEleve', id);
        console.log(id);
        history.push(
            '/FicheEleve'
        )
    }
    return (
        <>
            <div className="wrapper">
                <h1> Liste Eleves</h1>
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
                            <th>N matricule</th>
                            <th>Nom & Prenom</th>
                            <th>Filiere & Niveau </th>
                            <th>Classe </th>
                            <th>Action </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {eleves?.eleve?.map(eleve => < tr >
                            <td key={{ eleve }} >{eleve.num_matricule}</td>
                            <td >{eleve.first_name}  {eleve.last_name}</td>
                            <td >{eleve.filiere} &&  {eleve.niveau}</td>
                            {/* <td >{eleve.Groupe} </td>
                            <td >{eleve.id_eleve} </td> */}
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(eleve.information_eleve_id)}>Modifier</Button></td>
                            <td><Button variant="outline-info" onClick={() => navigateUpdate(eleve.information_eleve_id)}>Detail Eleve</Button></td>
                        </tr>)}
                    </tbody>
                </Table >
            </div>
        </>

    )
}
