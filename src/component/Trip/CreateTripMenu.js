import React from 'react';

class CreateTripMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-sm-3 col-md-3" id="block-menu-content">
                    <ul className="block-menu" data-spy="affix" data-offset-top="500" data-offset-bottom="400">
                        <li><a className="faq-button active" href="#basic"><i className="icon fa fa-check-square-o"></i>Basic Information</a></li>
                        <li><a className="faq-button" href="#summary"><i className="icon fa fa-th-list"></i> Summary</a></li>
                        <li><a className="faq-button" href="#images"><i className="icon fa fa-picture-o"></i> Images</a></li>
                        <li><a className="faq-button" href="#map"><i className="icon fa fa-map-marker"></i>Place on Map</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
      }
}

export default CreateTripMenu;