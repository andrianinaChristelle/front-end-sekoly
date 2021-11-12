import axios from "axios";
import { base_url } from "../environnement/environnement";
import { getItem } from "./LocalStorage";

export default class EleveService {
    static getNationalite = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/nationalite/getNationalite', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static insertEleve = async (nationality_id, first_name, lastname, birthday, birthday_place, genre, cin, fait_a, phone_number, email, permanant_adress, situation_matrimonial, num_matricule, ecole_origine, bac_serie, obtention_bacc, adress) => {
        var bodyFormData = new FormData();
        bodyFormData.append('nationality_id', nationality_id);
        bodyFormData.append('first_name', first_name);
        bodyFormData.append('lastname', lastname);
        bodyFormData.append('birthday', birthday);
        bodyFormData.append('birthday_place', birthday_place);
        bodyFormData.append('genre', genre);
        bodyFormData.append('cin', cin);
        bodyFormData.append('faitA', fait_a);
        bodyFormData.append('phone_number', phone_number);
        bodyFormData.append('email', email);
        bodyFormData.append('permanant_adress', permanant_adress);
        bodyFormData.append('situation_matrimonial', situation_matrimonial);
        bodyFormData.append('num_matricule', num_matricule);
        bodyFormData.append('ecole_origine', ecole_origine);
        bodyFormData.append('bac_serie', bac_serie);
        bodyFormData.append('obtention_bacc', obtention_bacc);
        bodyFormData.append('adress', adress);
        console.log(bodyFormData.get('nationality_id'));
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/informationEleve/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static insertInformationInscription = async (information_eleve_id, classe_id, photo, session_id) => {
        console.log('okkk');
        var bodyFormData = new FormData();
        bodyFormData.append('information_eleve_id', information_eleve_id);
        bodyFormData.append('classe_id', classe_id);
        bodyFormData.append('photo', photo);
        bodyFormData.append('session_id', session_id);
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/InformationInscription/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getAllFiliereEleve = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/FiliereEleve/getFiliere', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getInformationInscription = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/InformationInscription/getInformationInscription', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getDetailleEleve = async (bodyFormData) => {
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/Eleve/getById',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getMois = async () => {
        return axios.get(base_url + 'mois/getmois');
    }

    static getEleve = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/InformationEleve/getInformationEleve', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getByNumMatricule = async (num_matricule) => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/InformationEleve/getByNumMatricule/' + num_matricule, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getEleveByClasse = async (id_niveau, id_filiere, session_id) => {
        console.log('okkk');
        var bodyFormData = new FormData();
        bodyFormData.append('id_niveau', id_niveau);
        bodyFormData.append('id_filiere', id_filiere);
        bodyFormData.append('session_id', session_id);
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/InformationInscription/getByClasse',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getFiliereEleve = async (id) => {
        console.log('serviceId==' + id);
        const token = getItem('Token');
        return axios.get(base_url + 'api/InformationInscription/getInformationInscription/' + id, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}
