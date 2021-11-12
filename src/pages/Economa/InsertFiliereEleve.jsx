import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ServicesEleve from '../../services/ServicesEleve';
import ServiceFiliere from '../../services/ServiceFiliere';
// import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import './economa.css';
import { useParams } from 'react-router';


const InsertFiliereEleve = () => {

    const [filiere, setFiliere] = useState([]);
    const [session, setSession] = useState();
    const [classe, setClasse] = useState([]);
    const [session_id, setSession_id] = useState();
    const [classe_id, setClasse_id] = useState();
    const [information_eleve_id, setInformationEleveId] = useState();
    const [photo, setPhoto] = useState('sary.src');
    const history = useHistory();
    let { id } = useParams();
    useEffect(() => {

        setInformationEleveId(id);
        console.log(id);
        ServiceFiliere.getFiliere()
            .then(res => {
                const filieres = res.data.Filiere;
                setFiliere({ filieres });
                console.log(res.data.Filiere);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        ServiceFiliere.getSession()
            .then(res => {
                const sessions = res.data.session;
                setSession({ sessions });
                console.log(res.data.session);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        ServiceFiliere.getClasse()
            .then(res => {

                const Classes = res.data.Classe;
                setClasse({ Classes });
                console.log(res.data.Classes);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    const handleSubmit = async e => {
        e.preventDefault();
        // console.log('okkkkk' + props.id);
        ServicesEleve.insertInformationInscription(information_eleve_id, classe_id, photo, session_id)
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        history.push('/ListeEleveEconoma');
    }
    return (
        <>
            <div className="wrapper">
                <form onSubmit={handleSubmit} >
                    <input type="text" name='photo' onChange={e => setPhoto(e.target.value)} /><br /><br />
                    <label>
                        Session :
                        <select onChange={e => setSession_id(e.target.value)}>
                            {session?.sessions?.map(sess =>
                                <option value={sess.id}>{sess.date_debut}//{sess.date_fin}</option>
                            )}
                        </select>
                    </label><br />
                    {filiere?.filieres?.map(fil =>
                        <Container>
                            <Row>
                                <Col xs={12} md={5}>
                                    <li>{fil.Filiere}</li>
                                </Col>
                                <Col xs={12} md={5}>
                                    {classe?.Classes?.filter((filiere) => filiere.Filiere_id === fil.id)
                                        .map(filiere => <div>
                                            <li> {filiere?.Niveau} {filiere?.Groupe}</li>

                                            <Col xs={6} md={2}>
                                                <label>
                                                    <input type="radio" name='Filiere' onChange={e => setClasse_id(filiere?.id)} />
                                                </label><br />
                                            </Col>
                                        </div>

                                        )}
                                </Col>

                            </Row>
                        </Container>

                    )}
                    <Button type="submit">Inseret</Button>
                </form>
            </div>
        </>
    )
};
export default InsertFiliereEleve;