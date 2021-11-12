import React, { useState, useEffect } from 'react';
import ServiceFamille from '../../services/ServiceFamille';
import InsertFiliereEleve from './InsertFiliereEleve';
import { Container, Row, Col } from 'react-bootstrap';
import EleveService from '../../services/ServicesEleve';
import { useHistory } from 'react-router';
import './economa.css';
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function InsertFamille() {
    const history = useHistory();
    const location = useLocation();
    const [modalShow, setModalShow] = useState(false);
    const [informationEleve_id, setInfomationEleveId] = useState();
    const [pere, setPere] = useState();
    const [profession_pere, setProfessionPere] = useState();
    const [number_phone_pere, setNumberPhonePere] = useState();
    const [mere, setMere] = useState();
    const [profession_mere, setProfessionMere] = useState();
    const [phone_number_mere, setPhoneNumberMere] = useState();
    const [tuteur, setTuteur] = useState();
    const [professionTuteur, setProfessionTuteur] = useState();
    const [epoux, setEpoux] = useState();
    const [professsion_epoux, setProfesssionEpoux] = useState();
    const [num_epoux, setNumEpoux] = useState();
    // event.preventDefault();
    useEffect(() => {
        let state = location?.state;
        let numMatricule = state?.numMatricule;
        console.log('okk' + numMatricule);
        EleveService.getByNumMatricule(numMatricule)
            .then(res => {
                const id = res.data.inforamtion_eleve.id;
                setInfomationEleveId({ id });
                console.log(numMatricule);
                console.log(id);
                console.log(res.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });


    }, []);
    const handleSubmit = async e => {
        e.preventDefault();

        setModalShow(true);
        ServiceFamille.insertFamille(informationEleve_id?.id, pere, profession_pere, number_phone_pere, mere, profession_mere, phone_number_mere, tuteur, professionTuteur, epoux, professsion_epoux, num_epoux)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            })
        // history.push("/ListeEleveEconoma");
    }
    return (
        <>
            <div className="wrapper">
                < Container>
                    <Row>
                        <Col xs={12} md={2}>
                        </Col>
                        <Col xs={12} md={10}>
                            <h1>Detail Famille</h1>
                            <form onSubmit={handleSubmit}>
                                <Col xs={12} md={4}>

                                </Col>
                                <Col xs={12} md={8}>

                                </Col>

                                <Row className="justify-content-md-center">
                                    <Col xs={12} md={4}>
                                        <label><h5>Pere : </h5> </label><br /><br />
                                        <label><h5>Profession pere : </h5> </label><br /><br />
                                        <label><h5>NumberPhonePere</h5></label><br /><br />
                                        <label> <h5>Mere</h5></label><br /><br />
                                        <label><h5>ProfessionMere</h5></label><br /><br />
                                        <label><h5>PhoneNumberMere</h5></label><br /><br />
                                        <label><h5>Tuteur </h5></label><br /><br />

                                        <label><h5>Epoux</h5></label><br /><br />
                                        <label><h5>phone_number</h5></label><br /><br />
                                        <label><h5>NumEpoux</h5></label><br /><br />
                                    </Col>

                                    <Col xs={12} md={8}>

                                        <input type="text" name='Pere' onChange={e => setPere(e.target.value)} /><br /><br />
                                        <input type="text" name='professionPere' onChange={e => setProfessionPere(e.target.value)} /><br /><br />
                                        <input type="text" name='NumberPhonePere' onChange={e => setNumberPhonePere(e.target.value)} /><br /><br />
                                        <input type="text" name='Mere' onChange={e => setMere(e.target.value)} /><br /><br />
                                        <input type="text" name='ProfessionMere' onChange={e => setProfessionMere(e.target.value)} /><br /><br />
                                        <input type="text" name='PhoneNumberMere' onChange={e => setPhoneNumberMere(e.target.value)} /><br /><br />
                                        <input type="text" name='Tuteur' onChange={e => setTuteur(e.target.value)} /><br /><br />
                                        <input type="text" name='setProfessionTuteur' onChange={e => setProfessionTuteur(e.target.value)} /><br /><br />
                                        <input type="text" name='Epoux' onChange={e => setEpoux(e.target.value)} /><br /><br />
                                        <input type="text" name='ProfesssionEpoux' onChange={e => setProfesssionEpoux(e.target.value)} /><br /><br />
                                        <input type="text" name='NumEpoux' onChange={e => setNumEpoux(e.target.value)} /><br /><br />
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
            <InsertFiliereEleve show={modalShow} onHide={() => setModalShow(false)} id={informationEleve_id?.id} />
        </>
    )
}