import React from 'react';

class SearchTravelForm extends React.Component{

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
                <section id="property-type" className="ads-type">
                    <div className="container">
                        <div className="ads-type">
                            <div className="property-type-slide" data-navigation=".property-type-slide-nav">
                                <div className="crsl-wrap">
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-1" data-type="apartement">
                                            <span className="title">Apartement</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-2" data-type="building-area">
                                            <span className="title">Building Area</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-3" data-type="condominium">
                                            <span className="title">Condominium</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-4" data-type="cottage">
                                            <span className="title">Cottage</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-5" data-type="family-house">
                                            <span className="title">Family House</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure className="crsl-item">
                                        <a href="#" className="item-type icon-6" data-type="single-home">
                                            <span className="title">Single Home</span>
                                            <span className="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                </div>
                                <div className="property-type-slide-nav nav-box">
                                    <a href="#" className="previous"></a>
                                    <a href="#" className="next"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="search-box" className="no-margin">
                    <div className="container search-container fixed-map">
                        <div className="search-options">
                            <span className="botton-options"><i className="fa fa-chevron-down"></i> Show Advanced Search</span>
                            <div className="searcher">
                                <div className="row margin-div">
                                    <div className="col-sm-6 col-md-3 margin-bottom">
                                        <input className="form-control" type="text" name="keywords" id="keywords" placeholder="Keywords" />
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Country --</option>
                                            <option value="brixton">France</option>
                                            <option value="london">Japon</option>
                                            <option value="middlesex">Chine</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Cities --</option>
                                            <option value="brixton">Paris</option>
                                            <option value="brixton">Brixton</option>
                                            <option value="london">London</option>
                                            <option value="middlesex">Middlesex</option>
                                            <option value="stratford">Stratford</option>
                                            <option value="wembley">Wembley</option>
                                            <option value="west-norwood">West Norwood</option>
                                            <option value="westminster">Westminster</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Type de logement --</option>
                                            <option value="apartments">Apartments</option>
                                            <option value="condos">Condos</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="houses">Houses</option>
                                            <option value="offices">Offices</option>
                                            <option value="retail">Retail</option>
                                            <option value="villa">Villa</option>                        
                                        </select>
                                    </div>
                                </div>
                                <div className="row margin-div sercher-margin-bottom">
                                    <div className="col-sm-6 col-md-3">
                                        <span id="label-budget" data-text="Budget"></span>
                                        <input className="form-control" type="text" name="keywords_budget" id="keywords_budget" placeholder="Budget" />

                                    </div>
                                    <div className="col-sm-6 col-md-2 margin-bottom">
                                        <span id="label-bathroom" data-text="Personnes"></span>
                                        <input className="form-control" type="text" name="bathroom" id="bathroom" value="3" />
                                    </div>
                                    <div className="col-sm-12 col-md-3 margin-bottom">
                                        <div className="slider noUi-target noUi-ltr noUi-horizontal noUi-background" id="price-range">
                                            <div className="noUi-base">
                                                <div className="noUi-origin noUi-connect noUi-dragable" style={{left: "19.3548%"}}>
                                                    <div className="noUi-handle noUi-handle-lower"></div>
                                                </div>
                                                <div className="noUi-origin noUi-background" style={{left: "72.5806%"}}>
                                                    <div className="noUi-handle noUi-handle-upper"></div></div></div></div>
                                        <div className="price-slider price">
                                            <span id="price-value-min">250000.00</span> 
                                            <span className="separator">$</span>
                                            <span id="price-value-max">745000.00</span>					
                                        </div>
                                    </div>
                                </div>
                                <div className="row filter hide-filter hidden-xs hidden-sm">
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Swimming Pool" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Fire Extinguisher" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Close to School"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Air Conditioning" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Built-in Kitchen" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Business District"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Pet Allowed" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Health Club"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Balcony" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Dryer"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Solar Heat" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Wine Cellar" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Hospital"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Sport Club" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Golf Course"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Lake View"/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Backyard" checked/></div>
                                    <div className="col-xs-6 col-sm-4 col-md-3"><input className="labelauty" type="checkbox" data-labelauty="Laundry" checked/></div>
                                </div>
                                <div className="margin-div footer">
                                    <button type="button" className="btn btn-default more-button hidden-xs hidden-sm">More filters</button>
                                    <button type="button" className="btn btn-default search-button">advanced search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
      }
}

export default SearchTravelForm;