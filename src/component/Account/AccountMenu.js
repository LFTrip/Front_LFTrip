import React from 'react';

export default class AccountMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ul className="block-menu">
                    <li><a className="faq-button active" href="profile.html"><i className="icon fa fa-user-secret"></i> Profile</a></li>
                    <li><a className="faq-button" href="my-properties.html"><i className="icon fa fa-home"></i> My trip</a></li>
                    <li><a className="faq-button" href="bookmarked.html"><i className="icon fa fa-heart"></i> Bookmarked</a></li>
                    <li><a className="faq-button" href="new-property.html"><i className="icon fa fa-plus"></i> Create New trip</a></li>
                </ul>
            </React.Fragment>
        );
      }
}
