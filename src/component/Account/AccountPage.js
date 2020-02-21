import React from 'react';
import { withBackaccessContext } from '../BackEnd';

import { compose } from 'recompose';
import ProfilPicture from './ProfilPicture';
import ProfilContact from './ProfilContact';
import AccountMenu from './AccountMenu';
import ProfilActivity from './ProfilActivity';
import ProfilInformation from './ProfilInformation';
import {withAuthentification} from '../Session';
class AccountPage  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData : props.authUser
        }
    }


   /* componentDidMount(){
        this.props.backaccess.getDataWitId(1, 'login').then(value =>{
            if(value!== undefined){
                this.setState({
                    userData :  value.response
                })
            }
        })
        .catch(error => {
            this.setState({ error });
            this.setState({
                userData : 
                    {
                        id : "",
                        firstname : "Diane",
                        lastname : "Haye",
                        email : "heyitsme@mail.fr",
                        password : "",
                        birthDate : "17/08/1996",
                        sexe : "F",
                        city : "London",
                        phoneNumber : "a",
                        departureAirport : "",
                        description : "lorem ipsum",
                        avatarPath : "",
                    }
                
            })
        });
    }*/

    saveDataForm = (dataToSave) => {
       //save, change state, call api
     /*  this.setState({
           userData : {
               ...dataToSave
           }
       })*/
       this.props.backaccess.updateData(dataToSave, 'users',this.state.userData.id, this.state.userData.token ).then(value =>{
            if(value!== undefined){
               
            }
        })

    }
    
    render()
    {
        const userAvatarPath = this.state.userData.avatar_path
        return(
            <section id="user-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-3">
                            <div className="agent-box-card grey">
                                <div className="image-content">
                                    <div className="image image-fill">
                                        <img alt="Image Sample" src="http://placehold.it/512/bbbbbb/ffffff"/>
                                    </div>
                                </div>
                                <div className="info-agent">
                                    <ProfilPicture imagePath={userAvatarPath} />	
                                    <ProfilContact />				
                                </div>
                            </div>
                            <br />
                            <AccountMenu />
                        </div>
                        <div className="col-sm-8 col-md-9">

                            <div className="row">
                                <ProfilInformation userInfo={this.state.userData} saveData={this.saveDataForm} />
                                <ProfilActivity />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default compose( withAuthentification ,withBackaccessContext,)(AccountPage);