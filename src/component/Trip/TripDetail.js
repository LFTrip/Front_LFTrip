import React, {Component} from 'react';

export default class TripDetail extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render()
    {
        return(
            <section id="property-content">

                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            

                            <div className="row">
                                <div className="col-md-4">

                                    <div className="section-title line-style">
                                        <h3 className="title">Rating</h3>
                                    </div>

                                    <ul className="rating">
                                        <li className="value">
                                            <span className="name">Exellent</span>
                                            <span className="graphic"><span className="percent" style={{width:" 88%"}}></span></span>
                                            <span className="count">1231</span>
                                        </li>
                                        <li className="value">
                                            <span className="name">Very Good</span>
                                            <span className="graphic"><span className="percent" style={{width: "5%"}}></span></span>
                                            <span className="count">76</span>
                                        </li>
                                        <li className="value">
                                            <span className="name">Average</span>
                                            <span className="graphic"><span className="percent" style={{width: "4%"}}></span></span>
                                            <span className="count">40</span>
                                        </li>
                                        <li className="value">
                                            <span className="name">Poor</span>
                                            <span className="graphic"><span className="percent" style={{width: "2%"}}></span></span>
                                            <span className="count">13</span>
                                        </li>
                                        <li className="value">
                                            <span className="name">Terrible</span>
                                            <span className="graphic"><span className="percent" style={{width: "1%"}}></span></span>
                                            <span className="count">7</span>
                                        </li>
                                    </ul>

                                    <div className="section-title line-style">
                                        <h3 className="title">Mortgage Calculate</h3>
                                    </div>
                                    <div className="mortgage-calculator-box">
                                        <form method="post" role="form">
                                            <div className="form-group">
                                                <label>Sale price ($)</label>
                                                <input type="text" id="mc-price" className="form-control" placeholder="es: 200000" />
                                            </div>
                                            <div className="form-group">
                                                <label>Down payment (%)</label>
                                                <input type="text" id="mc-down" className="form-control" placeholder="es: 5" />
                                            </div>
                                            <div className="form-group">
                                                <label>Interest Rate (%)</label>
                                                <input type="text" id="mc-rate" className="form-control" placeholder="es: 6" />
                                            </div>
                                            <div className="form-group">
                                                <label>Term (years)</label>
                                                <input type="text" id="mc-term" className="form-control" placeholder="es: 20" />
                                            </div>
                                            <button id="mortgage-calc" className="btn btn-reverse" type="button">Calculate</button>
                                        </form>
                                        <div className="result-calc" id="mc-payment">$ 0,00</div>
                                    </div>

                                    <div className="section-title line-style">
                                        <h3 className="title">Feedback</h3>
                                    </div>
                                    <div className="feedback">
                                        <div className="user-feedback">
                                            <span className="name">Pinco Pallino</span>
                                            <span className="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span className="vote">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </span>
                                        </div>
                                        <div className="user-feedback">
                                            <span className="name">Pinco Pallino</span>
                                            <span className="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span className="vote">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <div className="user-feedback">
                                            <span className="name">Pinco Pallino</span>
                                            <span className="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span className="vote">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-8">

                                    <div className="section-title line-style">
                                        <h3 className="title">Description</h3>
                                    </div>
                                    <div className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricieseleifend faucibus. Nunc a tincidunt elit. Duis ornare dui ut magna aliquet ullamcorper. Duis pharetra pellentesque arcu, vitae placerat ligula luctus sed. Nam cursus diam odio, a condimentum nulla imperdiet a.<br /><br />

                                        <img src="http://placehold.it/560x270/bbbbbb/ffffff" className="img-responsive" alt="project image" /><br />
                                        
                                        <em>Mauris dui sapien, fermentum at pulvinar non, rhoncus non est. Sed viverra turpis eget auctor consequat. Quisque sit amet varius ligula. Donec non ullamcorper orci, ac pellentesque lectus. Nam convallis dolor eu tincidunt pharetra.</em><br /><br />
                                        
                                        Etiam quis tortor pharetra, elementum ante atper pretium. Nam convallis dolor eu tincidunt pharetra.
                                    </div>

                                    <div className="section-title line-style line-style">
                                        <h3 className="title">Property details</h3>
                                    </div>
                                    <div className="details">
                                        <div className="row">
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> attic</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> gas heat</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> balcony</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> wine cellar</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> basketball court</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> trash compactors</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> fireplace</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> pool</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> lake view</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> solar Heat</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> separate Shower</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> wet bar</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> remodeled</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> skylights</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> stone Surfaces</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> golf course</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square"></i> health club</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> backyard</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> pet allowed</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> office/den</span>
                                            </div>
                                            <div className="col-sm-4 col-xs-6">
                                                <span className="detail"><i className="fa fa-square-o"></i> laundry</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="section-title line-style">
                                        <h3 className="title">Find this property on map</h3>
                                    </div>
                                    <div className="map-container" id="map-canvas"></div>

                                </div>
                            </div>


                        </div>
                        <div className="col-md-3">

                            <div className="agent-box-card grey hidden-xs hidden-sm">
                                <div className="image-content">
                                   						
                                </div>
                                <div className="info-agent">
                                    <span className="name">Diane Hayes</span>
                                    <div className="text">embarrassing hidden in the middle of tex generators on the tend to repeat predefined chunks as necessary, making this the first true </div>
                                    <ul className="contact">
                                        <li><a className="icon" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="icon" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a className="icon" href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="icon" href="#"><i className="fa fa-envelope-o"></i></a></li>
                                        <li><a className="icon" href="agent-detail.html"><i className="fa fa-info-circle"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="contact-agent">
                                <form method="post" action="contact.php" role="form" data-toggle="validator">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Name *" className="form-control" name="name" id="name" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Your Email *" className="form-control" name="email" id="email" required/>
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message *" rows="5" className="form-control" name="text-message" id="text-message" required> name="text-message"</textarea>
                                    </div> 
                                    <button className="btn btn-default" type="submit">Send Message</button>
                                </form>					
                            </div>

                            <div className="section-title line-style line-style">
                                <h3 className="title">Search</h3>
                            </div>
                            <div className="search-box-page">
                                <div className="row">
                                    <div className="col-md-12 space-div">
                                        <input className="form-control" type="text" name="keywords" id="keywords" placeholder="Keywords" />
                                    </div>
                                    <div className="col-md-12 space-div">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Cities --</option>
                                            <option value="brixton">Brixton</option>
                                            <option value="london">London</option>
                                            <option value="middlesex">Middlesex</option>
                                            <option value="stratford">Stratford</option>
                                            <option value="wembley">Wembley</option>
                                            <option value="west-norwood">West Norwood</option>
                                            <option value="westminster">Westminster</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 space-div">
                                        <select className="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Purpose --</option>
                                            <option value="rent">Rent</option>
                                            <option value="sell">Sell</option>                        
                                        </select>
                                    </div>
                                    <div className="col-md-12 space-div">
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
                                    <div className="col-md-12 space-div">
                                        <select className="dropdown">
                                            <option value="">-- Any Status --</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Available">Available</option>
                                            <option value="Not Available">Not Available</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Open House">Open House</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 space-div">
                                        <label>Bathroom</label>
                                        <input className="form-control" type="text" name="bathroom" id="bathroom" value="3" />
                                    </div>
                                    <div className="col-md-6 space-div">
                                        <label>Bedroom</label>
                                        <input className="form-control" type="text" name="bedroom" id="bedroom" value="2" />
                                    </div>
                                    <div className="col-md-12 space-div">
                                        <label>Price</label>
                                        <div className="slider" id="price-range"></div>
                                        <div className="price-slider price">
                                            <span id="price-value-min"></span> 
                                            <span className="separator">$</span>
                                            <span id="price-value-max"></span>					
                                        </div>
                                    </div>
                                    <div className="col-md-12 space-div">
                                        <button type="button" className="btn btn-default search-button">Search Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="section-title line-style line-style">
                                <h3 className="title">Other Property</h3>
                            </div>

                            <div className="box-ajout box-grid mini">
                                <a className="hover-effect image image-fill" href="property-detail.html">
                                    <span className="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 className="title">59 Paterson Ave</h3>
                                </a>
                                <span className="price">$ 745.500,00</span>
                                <span className="address"><i className="fa fa-map-marker"></i> Golden Valley, MN 55427</span>
                                <span className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by insages of Lorem Ipsum available, but the majority have suffered alteratiojected humour.</span>
                                <dl className="detail">
                                    <dt className="status">Status:</dt><dd><span>Sale</span></dd>
                                    <dt className="bed">Beds:</dt><dd><span>4</span></dd>
                                    <dt className="bath">Baths:</dt><dd><span>2</span></dd>
                                </dl>
                                <div className="footer">
                                    <a className="btn btn-default" href="property-detail.html">Read now</a>
                                </div>
                            </div>  

                            <div className="box-ajout box-grid mini">
                                <a className="hover-effect image image-fill" href="property-detail.html">
                                    <span className="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 className="title">403 Bloomfield St</h3>
                                </a>
                                <span className="price">$ 233.500,00</span>
                                <span className="address"><i className="fa fa-map-marker"></i> Golden Valley, MN 55427</span>
                                <span className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by insages of Lorem Ipsum available, but the majority have suffered alteratiojected humour.</span>
                                <dl className="detail">
                                    <dt className="status">Status:</dt><dd><span>Sale</span></dd>
                                    <dt className="bed">Beds:</dt><dd><span>2</span></dd>
                                    <dt className="bath">Baths:</dt><dd><span>1</span></dd>
                                </dl>
                                <div className="footer">
                                    <a className="btn btn-default" href="property-detail.html">Read now</a>
                                </div>
                            </div>  

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}