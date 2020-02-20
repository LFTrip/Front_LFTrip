import React, {Component} from 'react';

export default class Createtrip extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render()
    {
        return(
            <section id="new-property">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-9 col-md-9">

                            <div className="info-block" id="basic">
                                <div className="section-title line-style no-margin">
                                    <h3 className="title">Basic Information</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 space-form">
                                        <input id="title" className="form-control" type="text" placeholder="Title" name="title"/>
                                    </div>
                                    <div className="col-md-7 space-form">
                                        <input id="address" className="form-control" type="text" placeholder="Address" name="address"/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name="description" id="description" className="form-control description">
                            
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate augue non bibendum dapibus.
                                            Phasellus fermentum nulla non ultricies vestibulum. Curabitur dictum nisl quis condimentum tempus. 
                                            Integer et libero pellentesque, rutrum nibh in, auctor elit. Pellentesque sit amet facilisis ante,
                                            quis dictum lectus. Morbi nec dui enim. Duis consectetur tellus a dignissim sollicitudin. 
                                            Quisque interdum id nisi vitae mattis. Curabitur non tortor a arcu gravida elementum ut a nisi.
                                            Sed porta turpis in elementum vulputate.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="info-block" id="summary">
                                <div className="section-title line-style">
                                    <h3 className="title">Summary</h3>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 space-form">
                                        <div className="slider" id="price-range"></div>
                                        <div className="price-slider price">
                                            <span id="price-value-min">200   </span> 
                                            <span className="separator">$</span>
                                            <span id="price-value-max">9000</span>					
                                        </div>
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Purpose --</option>
                                            <option value="rent">Rent</option>
                                            <option value="sell">Sell</option>                        
                                        </select>
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Type --</option>
                                            <option value="apartments">Apartments</option>
                                            <option value="condos">Condos</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="houses">Houses</option>
                                            <option value="offices">Offices</option>
                                            <option value="retail">Retail</option>
                                            <option value="villa">Villa</option>                        
                                        </select>
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <select className="dropdown">
                                            <option value="">-- Any Status --</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Available">Available</option>
                                            <option value="Not Available">Not Available</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Open House">Open House</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <input className="form-control" type="text" name="bathroom" id="bathroom" data-text="Bathroom" value="3" />
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <input className="form-control" type="text" name="bedroom" id="bedroom" data-text="Bedroom" value="2" />
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <input className="form-control" type="text" name="property-size" id="property-size" data-text="Size Property" value="120" />
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <input id="video-source" className="form-control" type="text" placeholder="Video source ID" name="video-source"/>
                                    </div>
                                    <div className="col-md-4 space-form">
                                        <input id="periodic-price" className="form-control" type="text" placeholder="Price Label (e.g. 'per month')" name="periodic-price" />
                                    </div>
                                </div>
                            </div>
                            <div className="info-block" id="images">
                                <div className="section-title line-style">
                                    <h3 className="title">Images</h3>
                                </div>
                                <form action="./upload.php" method="post" className="dropzone"></form>
                                <span className="text">
                                    <strong>Drop files</strong> here or <strong>click</strong> to upload.<br />
                                </span>
                            </div>

                           <div className="info-block" id="map">
                                <div className="section-title line-style">
                                    <h3 className="title">Place on Map</h3>
                                </div>
                                <div id="map-canvas" style={{height: "300px"}}></div>
                                <div id="position"><i className="fa fa-map-marker"></i> Drag the pin to the location on the map</div>
                            </div>
                       </div>
                    </div>
                </div>
		    </section>
        )
    }
}