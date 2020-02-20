import React from 'react';

export default class ProfilInformation extends React.Component{

    constructor(props){
        super(props);
    }

    inputableForm = () => {
        var allLabel = document.getElementsByClassName('inputable');
        for (var i = 0; i < allLabel.length; i ++) {
            allLabel[i].style.display = 'none';
        }
        var allInput = document.getElementsByClassName('inputFormHidden');
        for (var i = 0; i < allInput.length; i ++) {
            allInput[i].style.display = 'block';
        }
    }

    render() {
        const firstname = this.props.userInfo.map(value => value.firstname)
        const lastname = this.props.userInfo.map(value => value.lastname)
        const password = this.props.userInfo.map(value => value.lastname)
        const email = this.props.userInfo.map(value => value.lastname)
        const birthDate = this.props.userInfo.map(value => value.lastname)
        const sexe = this.props.userInfo.map(value => value.lastname)
        const city = this.props.userInfo.map(value => value.lastname)
        const phoneNumber = this.props.userInfo.map(value => value.lastname)
        const description = this.props.userInfo.map(value => value.lastname)


        return (
            <React.Fragment>
                <div class="col-md-7">
                    <div class="section-title line-style no-margin">
                        <h3 class="title">General Info</h3>
                        <button class="icon fa fa-cog inputable" onClick={this.inputableForm}> Modifier</button>
                    </div>
                    <ul class="profile">
                        <li class="disabled">
                            <span>FirstName</span> 
                            <div class="inputable">{firstname}</div> 
                            <div class="inputFormHidden"><input type="text" value={firstname} /></div>
                        </li>
                        <li>
                            <span>LastName</span>
                            <div class="inputable">{lastname}</div>
                            <div class="inputFormHidden"><input type="text" value={firstname} /></div>
                        </li>
                        <li>
                            <span>Password</span>
                            <div class="inputable">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</div>
                            <div class="inputFormHidden"><input type="password" value="" /></div>
                        </li>
                        <li>
                            <span>Place of birth</span>
                            <div class="inputable">New York, NY</div> <input type="hidden" class="inputForm" />
                        </li>
                        <li>
                            <span>Date of birth</span> <div class="inputable">18/01/1973 </div>
                        </li>
                        <li class="fullwidth">
                            <span>Short About</span> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus dui massa, ac rhoncus nisl blandit in. Sed dapibus vehicula felis, eu tempor odio mollis vitae. Sed sollicitudin nibh quis luctus aliquam.<br /><br />Cras ornare in ligula ut iaculis. Vestibulum ultricies imperdiet tempor. Maecenas at mi eu nunc accumsan ultricies.</p>
                        </li>
                    </ul>
                    <div class="section-title line-style">
                        <h3 class="title">Basic Contact</h3>
                    </div>
                    <ul class="profile">
                        <li>
                            <span>Email</span> 
                            admin@Trip.com
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
            </React.Fragment>
        );
      }
}
