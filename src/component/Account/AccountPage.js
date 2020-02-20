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
            userData : [
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
            ]
        }
    }

    componentDidMount(){
        this.props.backaccess.getDataWitId(1, 'login').then(value =>{
           
            console.log(value);
            if(value!= undefined){
            this.setState({
                userData :  [value.data.response]
            })

            }
        })
        .catch(error => {
            console.log(error)
            this.setState({ error });
            this.setState({
                userData : [
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
                ]
            })
        });
    }
    
    render()
    {
        const userAvatarPath = this.state.userData.map(value => value.avatarPath)

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
                                <ProfilInformation userInfo={this.state.userData} />
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