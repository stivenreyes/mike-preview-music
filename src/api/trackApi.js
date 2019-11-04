import axios from "axios";
import configServices from "../services/config";

export class TrackApi {

    getByNameAndType(q, type) {
        return axios.get(`${configServices.apiUrl}/search`, {
            params: {
                q,
                type
            }
        })
    }

}