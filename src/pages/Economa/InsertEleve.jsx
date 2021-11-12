import React, { useState, useEffect } from 'react';
import ServicesEleve from '../../services/ServicesEleve';
import InsertFiliereEleve from './InsertFiliereEleve';
import { Container, Row, Col } from 'react-bootstrap';
import './economa.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

export default function InsertEleve() {
    // const [modalShow, setModalShow] = useState(false);
    const history = useHistory();
    const [nationalite, setNationalite] = useState([]);
    const [nationality_id, setNationalityId] = useState();
    const [first_name, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [birthday, setBirthday] = useState();
    const [birthday_place, setBirthdayPlace] = useState();
    const [genre, setGenre] = useState();
    const [adress, setAdress] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [permanant_adress, setPermanantAdress] = useState();
    const [situation_matrimonial, setSituationMatrimonial] = useState();
    const [cin, seCin] = useState();
    const [faitA, setFaiA] = useState();
    const [num_matricule, setNumMatricule] = useState();
    const [ecole_origine, setEcoleOrigine] = useState();
    const [bac_serie, setBacSerie] = useState();
    const [obtention_bacc, setObtentionBacc] = useState();
    // event.preventDefault();
    useEffect(() => {
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
    const handleSubmit = async e => {
        e.preventDefault();

        // setModalShow(true);
        ServicesEleve.insertEleve(nationality_id, first_name, lastname, birthday, birthday_place, genre, cin, faitA, phone_number, email, permanant_adress, situation_matrimonial, num_matricule, ecole_origine, bac_serie, obtention_bacc, adress)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })
        history.push(
            'InsertFamille',
            {
                numMatricule: num_matricule
            }
        );
    }
    return (
        <>
            <div className="wrapper">
                < Container>
                    <Row>
                        <Col xs={12} md={2}>
                        </Col>
                        <Col xs={12} md={10}>
                            <h1>Nouvel eleve</h1>
                            <form onSubmit={handleSubmit}>
                                <Col xs={12} md={4}>
                                </Col>
                                <Col xs={12} md={8}>

                                </Col>

                                <Row className="justify-content-md-center">
                                    <Col xs={12} md={4}>
                                        <label><h5>Nationalite : </h5> </label><br /><br />
                                        <label> <h5>First Name</h5> </label><br /><br />
                                        <label><h5>Last Name</h5>
                                            <label></label><h5>Birthday</h5></label><br /><br />
                                        <label><h5>Birthday Place</h5></label><br /><br />
                                        <label><h5>genre</h5></label><br /><br /><br />
                                        <label><h5>adress</h5></label><br /><br />
                                        <label> <h5>phone_number</h5></label><br /><br />
                                        <label><h5>email</h5><br /></label><br />
                                        <label><h5>permanant_adress</h5></label><br /><br />
                                        <label><h5>situation_matrimonial</h5></label><br /><br />
                                        <label> <h5>cin</h5></label><br /><br />
                                        <label> <h5>faitA</h5></label><br /><br />
                                        <label> <h5>num_matricule</h5></label><br /><br />
                                        <label> <h5>ecole_origine</h5></label><br /><br />
                                        <label> <h5>bac_serie</h5></label><br /><br />
                                        <label> <h5>obtention_bacc</h5></label><br /><br />
                                    </Col>

                                    <Col xs={12} md={8}>
                                        <select onChange={e => setNationalityId(e.target.value)}>
                                            {nationalite?.pays?.map(nation =>
                                                <option value={nation.id}>{nation.nationalite} </option>
                                            )}
                                        </select><br /><br />
                                        <input type="text" name='FirstName' onChange={e => setFirstName(e.target.value)} /><br /><br />
                                        <input type="text" name='LastName' onChange={e => setLastName(e.target.value)} /><br /><br />
                                        <input type="date" name='Birthday' onChange={e => setBirthday(e.target.value)} /><br /><br />
                                        <input type="text" name='BirthdayPlace' onChange={e => setBirthdayPlace(e.target.value)} /><br /><br />
                                        <select onChange={e => setGenre(e.target.value)}>
                                            <option value="true">Feminin</option>
                                            <option value="false">masculin</option>
                                        </select><br /><br /><br />
                                        <input type="text" name='Adress' onChange={e => setAdress(e.target.value)} required /><br /><br />
                                        <input type="text" name='PhoneNumber' onChange={e => setPhoneNumber(e.target.value)} /><br /><br />
                                        <input type="text" name='setEmail' onChange={e => setEmail(e.target.value)} /><br /><br />
                                        <input type="text" name='PermanantAdress' onChange={e => setPermanantAdress(e.target.value)} /><br /><br />
                                        <input type="text" name='SituationMatrimonial' onChange={e => setSituationMatrimonial(e.target.value)} /><br /><br />
                                        <input type="text" name='Cin' onChange={e => seCin(e.target.value)} /><br /><br />
                                        <input type="text" name='FaiA' onChange={e => setFaiA(e.target.value)} /><br /><br />
                                        <input type="text" name='NumMatricule' onChange={e => setNumMatricule(e.target.value)} /><br /><br />
                                        <input type="text" name='EcoleOrigine' onChange={e => setEcoleOrigine(e.target.value)} /><br /><br />
                                        <input type="text" name='BacSerie' onChange={e => setBacSerie(e.target.value)} /><br /><br />
                                        <input type="date" name='ObtentionBacc' onChange={e => setObtentionBacc(e.target.value)} /><br /><br />
                                    </Col>
                                </Row>
                                <div>
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        </Col>

                    </Row>
                </Container>

            </div >
            {/* <InsertFiliereEleve show={modalShow} onHide={() => setModalShow(false)} matricule={num_matricule} /> */}
        </>
    )
}