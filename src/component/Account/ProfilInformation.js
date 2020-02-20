import React from 'react';

export default class ProfilInformation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userData : {
                firstname : "",
                lastname : "",
                password : "",
                email : "",
                birthDate : "",
                sexe : "",
                city : "",
                phoneNumber : "",
                description : ""
            }
        }
    }

    // change DOM struct to get input field to edit user information
    editInformationMode = () => { 
        this.switchInputable("inputFormHidden", "inputable")
    }

    // reinitialize DOM struct and save user information
    saveInformation = () => {  
        this.switchInputable("inputable", "inputFormHidden")
        //remonté data
        this.state.userData.firstname = document.getElementById('firstname').value
        this.state.userData.lastname = document.getElementById('lastname').value
        this.state.userData.sexe = document.getElementById('sexe').value
        this.state.userData.description = document.getElementById('description').value
        //this.state.userData.email = document.getElementById('email').value
        this.state.userData.birthDate = document.getElementById('birthDate').value
        //this.state.userData.city = document.getElementById('city').value
        //this.state.userData.phoneNumber = document.getElementById('phoneNumber').value

        this.props.saveData(this.state.userData)
    }

    // param : on is class name to display, off is class name to hidechange Dom to display and hide
    // change DOM struct to hide and display different inputs
    switchInputable = (on, off) => { 
        var toHide = document.getElementsByClassName(off);
        for (var i = 0; i < toHide.length; i ++) {
            toHide[i].style.display = 'none';
        }
        var toShow = document.getElementsByClassName(on);
        for (var i = 0; i < toShow.length; i ++) {
            toShow[i].style.display = 'block';
        }
    }

    render() {
        const {firstname, lastname, password, email, birthDate, sexe, city, phoneNumber, description} = this.props.userInfo


        return (
            <React.Fragment>
                <div class="col-md-7">
                    <div class="section-title line-style no-margin">
                        <h3 class="title">General Info</h3>
                        <button class="icon fa fa-cog inputable" onClick={this.editInformationMode}> Modifier</button>
                        <button class="icon fa fa-floppy-o inputFormHidden" onClick={this.saveInformation}> Save</button>
                    </div>
                    <ul class="profile">
                        <li class="disabled">
                            <span>FirstName</span> 
                            <div class="inputable">{firstname}</div> 
                            <div class="inputFormHidden"><input id="firstname" type="text" defaultValue={firstname} /></div>
                        </li>
                        <li>
                            <span>LastName</span>
                            <div class="inputable">{lastname}</div>
                            <div class="inputFormHidden"><input id="lastname" type="text" defaultValue={lastname} /></div>
                        </li>
                        <li>
                            <span>Sexe</span>
                            <div class="inputable">{sexe}</div>
                            <div class="inputFormHidden">
                            <select name="sexe" id="sexe">
                                <option value={sexe}></option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select></div>
                        </li>
                        <li>
                            <span>Date of birth</span>
                            <div class="inputable">18/01/1973 </div>
                            <div class="inputFormHidden"><input id="birthDate" type="text" defaultValue={birthDate} /></div>
                        </li>
                        <li class="fullwidth">
                            <span>Short About</span> 
                            <div class="inputable">{description} </div>
                            <div class="inputFormHidden"><textarea id="description" type="text" defaultValue={description} /></div>
                        </li>
                    </ul>
                    <div class="section-title line-style">
                        <h3 class="title">Account Information</h3>
                    </div>
                    <ul class="profile">
                        <li>
                            <span>Email</span> 
                            <div class="inputable">{email} </div>
                            <div class="inputFormHidden"><input type="password" defaultValue={email} /></div>
                        </li>
                        <li>
                            <span>Password</span>
                            <div class="inputable">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </div>
                            <div class="inputFormHidden"><input type="password" defaultValue="" /></div>
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
                            <span>Phone</span>
                            <div class="inputable">{phoneNumber}</div>
                            <div class="inputFormHidden"><input type="text" defaultValue={phoneNumber} /></div>
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
