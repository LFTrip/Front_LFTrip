import React from 'react';

class Map extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section id="maps" className="header-margin-base">
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <div className="text"><span>Loading Maps</span>please wait</div>
                    </div>
                    <div className="find-result"></div>
                    <div className="map map-home" id="map-canvas"></div>
                </section>
            </React.Fragment>
        );
      }
}

export default Map;