import React from 'react';

class TripList extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="list-box-title">
                        <span><i className="icon fa fa-plus-square"></i>Recent Listed</span>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box-ajout box-home enlever" >
                                <a className="hover-effect image image-fill" href="property-detail.html">
                                    <span className="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 className="title">Japon</h3>
                                </a>
                                <span className="price">Budget : $ 536.500,00</span>
                                <span className="address"><i className="fa fa-map-marker"></i> Hoboken, NJ 07030</span>
                                <span className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
                                <div className="detail">
                                    <dt className="status">Status:</dt><dd><span>road trip</span></dd>
                                    <dt className="area">Area:</dt><dd><span>Country</span></dd>
                                    <dt className="bed">Beds:</dt><dd><span>3</span></dd>
                                    <dt className="bath">People:</dt><dd><span>3</span></dd>
                                </div>
                                <div className="footer">
                                    <a className="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ajout box-home">
                                <a className="hover-effect image image-fill" href="property-detail.html">
                                    <span className="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 className="title">560 Marshall Dr</h3>
                                </a>
                                <span className="price">$ 709.000,00</span>
                                <span className="address"><i className="fa fa-map-marker"></i> Hoboken, NJ 07056</span>
                                <span className="description">Lorem Ipsum available, but the majority have suffered There are many variations of passages by injected humour.</span>
                                <div className="detail">
                                    <dt className="status">Status:</dt><dd><span>In city</span></dd>
                                    <dt className="area">Area:</dt><dd><span>City</span></dd>
                                    <dt className="bed">Beds:</dt><dd><span>4</span></dd>
                                    <dt className="bath">People:</dt><dd><span>12</span></dd>
                                </div>
                                <div className="footer">
                                    <a className="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-ajout box-home enlever" >
                                <a className="hover-effect image image-fill" href="property-detail.html">
                                    <span className="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 className="title">USA</h3>
                                </a>
                                <span className="price">$ 663.500,00</span>
                                <span className="address"><i className="fa fa-map-marker"></i> USA</span>
                                <span className="description">Nulla condimentum neque nulla. Sed at ornare lacus, id euismod felis. Aliquam et vulputate tortor. Nunc gravida nunc sed mi bibendum accumsan.</span>
                                <div className="detail">
                                    <dt className="status">Status:</dt><dd><span>Road trip</span></dd>
                                    <dt className="area">Area:</dt><dd><span>Country</span></dd>
                                    <dt className="bed">Beds:</dt><dd><span>9</span></dd>
                                    <dt className="bath">People:</dt><dd><span>12</span></dd>
                                </div>
                                <div className="footer">
                                    <a className="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
      }
}

export default TripList;