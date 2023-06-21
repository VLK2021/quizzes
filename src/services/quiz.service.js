import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const quizService = {
    getQuiz: (id, dif) => axiosService.get(urls.quiz(id,dif)).then(value => value.data),
}