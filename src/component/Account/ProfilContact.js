import React from 'react';

export default class ProfilContact extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ul className="contact">
                    <li><a href="#" className="icon"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="icon"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#" className="icon"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="icon"><i className="fa fa-envelope-o"></i></a></li>
                    <li><a href="agent-detail.html" className="icon"><i className="fa fa-info-circle"></i></a></li>
                </ul>	
            </React.Fragment>
        );
      }
}
