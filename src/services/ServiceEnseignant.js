import axios from "axios";
import { base_url } from "../environnement/environnement";
import { getItem } from "./LocalStorage";

export default class ServiceEnseignant {
    static insertEnseignant = async (nom, prenom, birthday, genre, phoneNumber) => {
        var bodyFormData = new FormData();
        bodyFormData.append('nom', nom);
        bodyFormData.append('prenom', prenom);
        bodyFormData.append('birthday', birthday);
        bodyFormData.append('genre', genre);
        bodyFormData.append('phone', phoneNumber);
        console.log(bodyFormData.get('informationEleve_id'));
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/information/enseigant/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getAllEnseignant = async () => {
        const token = getItem('Token');
        const url = base_url + 'api/information/enseigant/get';
        console.log(url);
        return axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getEnseignantById = async (id) => {
        console.log(id);
        const token = getItem('Token');
        const url = base_url + 'api/information/enseigant/getById/' + id;
        console.log(url);
        return axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    static getMatiereEnseigner = async (id) => {
        const token = getItem('Token');
        const url = base_url + 'api/Martiere/getMatiereEnseignant/' + id;
        console.log(url);
        return axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}