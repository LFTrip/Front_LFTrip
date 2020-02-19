import React from 'react';
import ProfilPicture from './ProfilPicture';
import ProfilContact from './ProfilContact';
import AccountMenu from './AccountMenu';
import ProfilActivity from './ProfilActivity';
import ProfilInformation from './ProfilInformation';

export default class AccountPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render()
    {
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
                                    <ProfilPicture />	
                                    <ProfilContact />				
                                </div>
                            </div>
                            <br />
                            <AccountMenu />
                        </div>
                        <div class="col-sm-8 col-md-9">

                            <div class="row">
                                <ProfilInformation />
                                <ProfilActivity />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}