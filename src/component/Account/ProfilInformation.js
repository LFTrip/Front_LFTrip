import React from 'react';

export default class ProfilInformation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            haveError : false,
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
        //this.state.userData.sexe = document.getElementById('sexe').value
        this.state.userData.description = document.getElementById('description').value
        this.state.userData.email = document.getElementById('email').value
        this.state.userData.birthDate = document.getElementById('birthDate').value
        this.state.userData.city = document.getElementById('city').value
        this.state.userData.phoneNumber = document.getElementById('phoneNumber').value

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
                    <div class="bs-callout callout-danger">
                        <h4 class="title">Erreur</h4>
                        <p class="text">Integer euismod cursus dolor. Curamet pellentesque sed, sodales at augue.</p>
                    </div>
                    <div class="section-title line-style no-margin">
                        <h3 class="title">General Info</h3>
                        <button class="icon fa fa-cog inputable" onClick={this.editInformationMode}> Modifier</button>
                        <button class="icon fa fa-floppy-o inputFormHidden" onClick={this.saveInformation}> Save</button>
                    </div>
                    <ul className="profile">
                        <li className="disabled">
                            <span>FirstName</span> 
                            <div className="inputable">{firstname}</div> 
                            <div className="inputFormHidden"><input id="firstname" type="text" defaultValue={firstname} /></div>
                        </li>
                        <li>
                            <span>LastName</span>
                            <div className="inputable">{lastname}</div>
                            <div className="inputFormHidden"><input id="lastname" type="text" defaultValue={lastname} /></div>
                        </li>
                        <li>
                            <span>City</span>
                            <div class="inputable">{city}</div>
                            <div class="inputFormHidden"><input id="city" type="text" defaultValue={city} /></div>
                        </li>
                        <li>
                            <span>Date of birth</span>
                            <div class="inputable">18/01/1973 </div>
                            <div class="inputFormHidden"><input id="birthDate" type="date" defaultValue={birthDate} /></div>
                        </li>
                        <li>
                            <span>Phone</span>
                            <div class="inputable">{phoneNumber}</div>
                            <div class="inputFormHidden"><input id="phoneNumber" type="text" defaultValue={phoneNumber} /></div>
                        </li>
                        <li className="fullwidth">
                            <span>Short About</span> 
                            <div className="inputable">{description} </div>
                            <div className="inputFormHidden"><textarea id="description" type="text" defaultValue={description} /></div>
                        </li>
                    </ul>
                    <div className="section-title line-style">
                        <h3 className="title">Account Information</h3>
                    </div>
                    <ul className="profile">
                        <li>
                            <span>Email</span> 
                            <div class="inputable">{email} </div>
                            <div class="inputFormHidden"><input id="email" type="text" defaultValue={email} /></div>
                        </li>
                        <li class="inputable">
                            <span>Password</span>
                            <div>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </div>
                            
                        </li>
                        <li class="inputFormHidden">
                            <span>Old Password</span>
                            <div class="inputable">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </div>
                            <div><input type="password" defaultValue="" /></div>
                        </li>
                        <li class="inputFormHidden">
                            <span>New Password</span>
                            <div class="inputable">&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; </div>
                            <div><input type="password" defaultValue="" /></div>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
      }
}
