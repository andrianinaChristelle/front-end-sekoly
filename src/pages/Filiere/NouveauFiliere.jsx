import React, { useState } from 'react';
import ServiceFiliere from '../../services/ServiceFiliere';
import { useHistory } from 'react-router';
import './filiere.css';

export default function NouveauFiliere() {
    const [filiere, setFiliere] = useState();
    const history = useHistory();
    // event.preventDefault();
    const handleSubmit = async e => {
        e.preventDefault();
        ServiceFiliere.insertFiliere(filiere)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })
        console.log(filiere);
        history.push("/Listefiliere");
    }
    return (
        <div className="wrapper">
            <h1>Nouveau Filiere</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <h5>Filiere</h5>
                    <input type="text" name='Filiere' onChange={e => setFiliere(e.target.value)} />
                </label><br />
                <div>
                    <p>{filiere}</p>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}