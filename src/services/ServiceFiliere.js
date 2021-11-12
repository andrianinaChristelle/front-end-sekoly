
import axios from 'axios';
import { base_url } from "../environnement/environnement";
import { getItem } from "./LocalStorage";

export default class EleveService {
    static insertFiliere = async (filiere) => {
        var bodyFormData = new FormData();
        const token = getItem('Token');
        bodyFormData.append('filiere', filiere);
        return axios({
            method: "post",
            url: base_url + 'api/filiere/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getFiliere = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/Filiere/getFiliere', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getNiveauFiliere = async (idFiliere) => {
        console.log('okkk');
        const token = getItem('Token');
        return axios.get(base_url + 'api/NiveauFiliere/getByIdFiliere/' + idFiliere, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getMatiere = async (idNiveauFiliere) => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/Martiere/getMatiere/' + idNiveauFiliere, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getSession = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/session/getsession', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getClasse = async () => {
        const token = getItem('Token');
        return axios.get(base_url + 'api/Classe/getClasse', {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}