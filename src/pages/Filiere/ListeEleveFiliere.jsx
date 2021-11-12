import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import EleveService from '../../services/ServicesEleve';
import './filiere.css';

import NoteService from '../../services/ServiceNote';


export default function ListeEleveFiliere() {
    const location = useLocation();
    const [eleve, setEleve] = useState([]);
    const [idMatiere, setIdMatiere] = useState();
    const [addData, setAddData] = useState([]);
    let data = [];

    // event.preventDefault();
    useEffect(() => {
        let state = location?.state;
        let id_filiere = state?.filiere;
        let id_niveau = state?.niveau;
        let session_id = state?.sess;
        let matiere = state?.mat;
        console.log(state?.mat);
        setIdMatiere(state?.mat);

        EleveService.getEleveByClasse(id_niveau, id_filiere, session_id)
            .then(res => {
                const listeEleve = res.data.eleve;
                setEleve({ listeEleve });
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(addData);
        addData.map(data =>
            NoteService.insertNote(data.id, data.note, data.matier)
                .then(res => {
                    const pays = res.data.data;
                    console.log(res.data.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        )
    }

    const handleChange = useCallback((e, id, idMatiere) => {

        const { name, value } = e.target;
        const temp = {
            note: value,
            id: id,
            matier: idMatiere,
        };
        let tab = (data.length > 0) ? data : [];


        tab.forEach((el, index) => {
            if (el.id == id) {
                tab.splice(index, index + 1);
            }
        });
        tab.push(temp);

        data = tab;

        setAddData(data);
        // data.splice()
        /*setAddData((s) => ({
            ...s,
            [name]: value,
        }));*/
    }, []);
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <Table striped bordered hover variant="blue">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>

                            <th>note</th>
                            {/* <th>Niveau</th>
                        <th>Groupe</th>  */}
                        </tr>
                    </thead>
                    <tbody>
                        {eleve?.listeEleve?.map((el, index) => < tr >
                            <td key={`note_${el.id}_${el.num_matricule}`} >{el.num_matricule} </td>
                            <td >{el.first_name}</td>
                            <td><input type="text" name={`note_${index}`} onChange={(e) => handleChange(e, el.id, idMatiere)} /></td>
                        </tr>)}
                    </tbody>
                </Table >
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}