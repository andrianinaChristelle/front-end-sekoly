import axios from "axios";
import { base_url } from "../environnement/environnement";
import { getItem } from "./LocalStorage";

export default class ServiceFamille {
    static insertFamille = async (informationEleve_id, pere, profession_pere, number_phone_pere, mere, profession_mere, phone_number_mere, tuteur, professionTuteur, epoux, professsion_epoux, num_epoux) => {
        var bodyFormData = new FormData();
        bodyFormData.append('informationEleve_id', informationEleve_id);
        bodyFormData.append('pere', pere);
        bodyFormData.append('profession_pere', profession_pere);
        bodyFormData.append('number_phone_pere', number_phone_pere);
        bodyFormData.append('mere', mere);
        bodyFormData.append('profession_mere', profession_mere);
        bodyFormData.append('phone_number_mere', phone_number_mere);
        bodyFormData.append('tuteur', tuteur);
        bodyFormData.append('professionTuteur', professionTuteur);
        bodyFormData.append('epoux', epoux);
        bodyFormData.append('professsion_epoux', professsion_epoux);
        bodyFormData.append('num_epoux', num_epoux);
        console.log(bodyFormData.get('informationEleve_id'));
        const token = getItem('Token');
        return axios({
            method: "post",
            url: base_url + 'api/InformationFamille/insert',
            data: bodyFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
    }
    static getFamille = async (id) => {
        const token = getItem('Token');
        const url = base_url + 'api/InformationFamille/getByEleve/' + id;
        console.log(url);
        return axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}