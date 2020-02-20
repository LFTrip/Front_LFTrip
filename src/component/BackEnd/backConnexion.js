import  * as conf from '../../const/params';
import axios from "axios";
const config = {
    url : "http://localhost:8080/api/v1/",
    uri : {
        "login" : 'users/',
        "logout" : "users/"
    }
}
export default class BackConnexion{
    constructor(){
        this.authListener = {}
    }

    dosignWithEmailAndPassword = (data, uri) =>{
        data.email = "feige@gmail.com";
        data.password = "password";
        
        return new Promise((resolve, reject) => { resolve(axios.post(
            config["url"]+config["uri"][uri],
            {
                "email": data.email,
                "password" : data.password
            }).then(response=> {

                if(response.status === 200){
                    console.log(response.data)
                    data = {
                        token : response.data
                    }
                     localStorage.setItem('authUser',  JSON.stringify(data)  )
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( console.log(error));
            })) });
    }

    onlogOut = data =>{
        axios.post(
            conf["url"]+conf["uri"]['logout'],
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


    

    postDate= (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(
            axios.post(
                conf["url"]+conf["path"][uri],
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( error);
            }))});
    }

    getDataWitId = (id, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.get(
            conf["url"]+conf["path"][uri],
            {
                id : id
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( error);
            }))
        });
    }

    getData = ( uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.get(
           "http://localhost:8081/"+uri).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }

    updateData = (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.put(
           "http://localhost:8081/"+uri,
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }

    deleteData= (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.delete(
           "http://localhost:8081/"+uri,
            {
                data
            }).then(response=> {
				console.log("ok")

                if(response.status === 200){
                    return response.data;
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
				console.log("ok")
                return  {"name": "toto"};
                reject( console.log(error));
            }))
            console.log("ok") 
            return  {"name": "toto"};});
    }
}