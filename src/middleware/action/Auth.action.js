import {Auth as authConstant} from "../constants/Auth";
import {Login as loginService} from "../services/Login.service";
import { Path } from "../constants/Path";
import { Constants } from "../constants/Constants";

export const Login = (credientals, history) =>{
    return (dispatch)=>{

        const loginDefault = () => ({type: authConstant.LOGIN});
        const loginSuccess = (token) => ({type: authConstant.LOGIN_SUCCESS, token});
        const loginFailed = (err) => ({type: authConstant.LOGIN_FAILED, err});

        dispatch(loginDefault());

        loginService(credientals).then((res)=>{
            console.log(res);
            if(res.data.status === Constants.SUCCESS){
                dispatch(loginSuccess(res.data.data));
                history.push(Path.DASHBOARD);
            }
            else{
                dispatch(loginFailed(res.data.message));
            }
            
        }).catch(err =>{
            dispatch(loginFailed(err.error.message));
            console.log(err);
        })

    }
}
