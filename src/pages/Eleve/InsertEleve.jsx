import React, { Component, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ServicesEleve from '../../services/ServicesEleve';


export default function Listefraiseve() {
    const [nationalite, setNationalite] = useState([]);

    useEffect(async () => {
        ServicesEleve.getNationalite()
            .then(res => {
                const pays = res.data.Nationalite;
                setNationalite({ pays });
                console.log(res.data.Nationalite);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }, []);
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>nationalite</th>

                    </tr>
                </thead>
                <tbody>
                    {nationalite?.pays?.map(nation => < tr >
                        <td >{nation.nationalite}</td>
                    </tr>)}
                </tbody>
            </Table >
        </>

    )
}
