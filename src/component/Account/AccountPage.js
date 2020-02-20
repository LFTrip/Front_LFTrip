import React from 'react';
import { withBackaccessContext } from '../BackEnd';
import ProfilPicture from './ProfilPicture';
import ProfilContact from './ProfilContact';
import AccountMenu from './AccountMenu';
import ProfilActivity from './ProfilActivity';
import ProfilInformation from './ProfilInformation';

class AccountPage  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
        }
    }

    componentDidMount(){
        //call api
    }

    saveDataForm = (dataToSave) => {
       //save, change state, call api
       console.log(dataToSave.firstname)
       this.setState({
           userData : {
                firstname : dataToSave.firstname,
                lastname : dataToSave.lastname,
                email : dataToSave.email,
                password : dataToSave.password,
                birthDate : dataToSave.birthDate,
                sexe : dataToSave.sexe,
                city : dataToSave.city,
                phoneNumber : dataToSave.phoneNumber,
                description : dataToSave.description
           }
       })
       console.log(this.state.userData.firstname)
    }
    
    render()
    {
        const userAvatarPath = this.state.userData.avatarPath
        console.log(this.state.userData.firstname)
        return(
            <section id="user-profile">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-md-3">
                            <div class="agent-box-card grey">
                                <div class="image-content">
                                    <div class="image image-fill">
                                        <img alt="Image Sample" src="http://placehold.it/512/bbbbbb/ffffff"/>
                                    </div>
                                </div>
                                <div class="info-agent">
                                    <ProfilPicture imagePath={userAvatarPath} />	
                                    <ProfilContact />				
                                </div>
                            </div>
                            <br />
                            <AccountMenu />
                        </div>
                        <div class="col-sm-8 col-md-9">

                            <div class="row">
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

export default withBackaccessContext(AccountPage);