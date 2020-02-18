import React from 'react';
import ProfilPicture from './ProfilPicture';
import ProfilContact from './ProfilContact';
import AccountMenu from './AccountMenu';
import ProfilActivity from './ProfilActivity';

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
                                <div class="col-md-7">
                                    <div class="section-title line-style no-margin">
                                        <h3 class="title">General Info</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li class="disabled">
                                            <span>Username</span> Tremont
                                        </li>
                                        <li>
                                            <span>Name</span> Diane Hayes
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Password</span> &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                                        </li>
                                        <li>
                                            <span>Place of birth</span> New York, NY
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Date of birth</span> 18/01/1973 
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li class="fullwidth">
                                            <span>Short About</span> 
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus dui massa, ac rhoncus nisl blandit in. Sed dapibus vehicula felis, eu tempor odio mollis vitae. Sed sollicitudin nibh quis luctus aliquam.<br /><br />Cras ornare in ligula ut iaculis. Vestibulum ultricies imperdiet tempor. Maecenas at mi eu nunc accumsan ultricies.</p>
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                    </ul>
                                    <div class="section-title line-style">
                                        <h3 class="title">Basic Contact</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li>
                                            <span>Email</span> 
                                            admin@Trip.com
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li>
                                            <span>Skype</span> 
                                            diane.hayes<i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Phone</span> 
                                            (011) 265 98745
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                    </ul>
                                    <div class="section-title line-style">
                                        <h3 class="title">Socian Network</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li>
                                            <span>Facebook</span> 
                                            http://facebook.com/diane.hayes-Trip.com 
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li>
                                            <span>Twitter</span> 
                                            @diane.Trip.com 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Google+</span> 
                                            @diane.Trip 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Web</span> 
                                            http://www.Trip.com/ 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                    </ul>
                                    <div class="bs-callout callout-danger">
                                        <h4 class="title">Nullam sodales lorem sit amet</h4>
                                        <p class="text">Integer euismod cursus dolor. Curamet pellentesque sed, sodales at augue.</p>
                                    </div>
                                  
                                </div>
                                <ProfilActivity />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}