import axios from 'axios';
import { base_url } from "../environnement/environnement";
import { getItem } from "./LocalStorage";

export default class EleveService {
    static insertNote = async (id_inscription, note, id_matiere) => {
        var bodyFormData = new FormData();
        bodyFormData.append('note', note);
        bodyFormData.append('id_eleve', id_inscription);
        bodyFormData.append('id_matiere', id_matiere);
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/note/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
}