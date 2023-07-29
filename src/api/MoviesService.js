import axios from "axios";
const API_KEY = '423b96fc305108f927887f5b217faae7';
const BASE_URL = 'https://api.themoviedb.org/3/'
const whithBaseURL = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {    
        return axios(whithBaseURL('movie/popular'));
    }
}