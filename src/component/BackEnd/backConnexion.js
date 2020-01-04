import  * as conf from '../../const/params';
import axios from "axios";

export default class BackConnexion{
    constructor(){
        this.authListener = {}
    }

    dosignWithEmailAndPassword = (data, uri) =>{
        axios.post(
            conf["url"]+conf["path"][uri],
            {
                Data : data
            }.then(response=> {
                if(response.status === 200){
                    localStorage.setItem('authUser', response.data['user'])
                }else{
                    return null;
                }
            }).catch(error =>{
                console.log(error);
            })
        )
    }

    onlogOut = data =>{
        axios.post(
            conf["url"]+conf["path"]['logout'],
            {
                data : data
            }.then(response=> {
                if(response.status === 200){
                    localStorage.setItem('authUser', null)
                }else{
                    return null;
                }
            }).catch(error =>{
                console.log(error);
            })
        )
    }

    callPost = (data, uri) =>{
        axios.post(
            conf["url"]+conf["path"][uri],
            {
                Data : data
            }.then(response=> {
                if(response.status === 200){
                    return data;
                }else{
                    return null;
                }
            }).catch(error =>{
                console.log(error);
                return error;
            })
        )
    }



}