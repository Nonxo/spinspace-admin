import Axios from "axios";
import { Endpoints } from "../constants/Endpoints";

export const Login = (credientials)=>{
    return Axios.post(`${Endpoints.AUTH}/login`, credientials)
}