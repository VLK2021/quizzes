import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const categoryService = {
    getAll: () => axiosService.get(urls.categories).then(value => value.data),
}