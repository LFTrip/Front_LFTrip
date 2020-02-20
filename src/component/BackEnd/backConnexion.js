import axios from "axios";
const conf = {
    url : "http://localhost:8080/api/v1/",
    uri : {
        "login" : 'login',
        "users" : 'users',
        "logout" : "users",
    }
}
export default class BackConnexion{
    constructor(){
        this.authListener = {}
    }

    dosignWithEmailAndPassword = (data) =>{
        return new Promise((resolve, reject) => { resolve(axios.post(
            conf.url+conf.uri.login,
            {
                "email": data.email,
                "password" : data.password
            }).then(response=> {

                if(response.status === 200){
                    console.log(response.data)
                    data = {
                        token : response.data
                    }
                     localStorage.setItem('authUser',  JSON.stringify(response.data.response)  )
                }else{
                    ///reject( console.log(response.data));
                }
            }).catch(error =>{
                reject( console.log(error));
            })) });
    }

    doCreateUserWithEmailAndPassword = (data) =>{
        return new Promise((resolve, reject) => { resolve(axios.post(
            conf.url+conf.uri.users,
            {
                "firstname": data.firstname,
                "lastname" : data.lastname,
                "email": data.email,
                "password" : data.password,
            }).then(response=> {

            if(response.status === 201){
                data = {
                    token : response.data
                }
                localStorage.setItem('authUser',  JSON.stringify(response.data.response)  )
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

    postDate= (data, uri) =>{        
        return new Promise((resolve, reject) => { 
            resolve(
            axios.post(
                conf["url"]+conf["path"][uri],
            {
                data
            }).then(response => {

                if(response.status === 200){
                  return response.data;
                }else{
                    reject( response.status);
                }
            }).catch(error =>{
                reject( error);
            }))});
    }

    getDataWitId = (id, uri) =>{        
        return new Promise(
            (resolve, reject) => {
                resolve(
                    axios.get(
                        conf["url"]+conf["uri"][uri]+id,
                         {
                             id : id
                         }).then(response=> {

                            if(response.status === 200){
                                return response.data;
                            }else{
                                reject( response.data);
                            }
                        }).catch(error =>{
                            reject( error);
                        })
                )
            });
    }

    getData = ( uri) =>{        
        return new Promise((resolve, reject) => { 
            resolve(axios.get(
                conf["url"]+conf["uri"][uri]
            ).then(response=> {

                if(response.status === 200){
                    return response.data;
                }else{
                    reject( response.data);
                }
            }).catch(error =>{
                reject( error);
            }))
        });
    }

    updateData = (data, uri) =>{        
        return new Promise((resolve, reject) => { 
            resolve(axios.put(
                conf["url"]+conf["uri"][uri],
                {
                    data
                }
            )
            .then(response=> {

                if(response.status === 200){
                    return response.data;
                }else{
                    reject( response.data);
                }
            }).catch(error =>{
                reject( error);
            }))});
    }

    deleteData= (data, uri) =>{        
        return new Promise((resolve, reject) => { resolve(axios.delete(
            conf["url"]+conf["uri"][uri],
            {
                data
            }).then(response=> {

                if(response.status === 200){
                    return response.status;
                }else{
                    reject( response.status);
                }
            }).catch(error =>{
                reject( console.log(error));
            }))
        });
    }
}