import React from 'react';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';


const HomePage = () => (
	<div>
		<section id="maps" class="header-margin-base">
			<div class="loading-container">
				<div class="spinner"></div>
				<div class="text"><span>Loading Maps</span>please wait</div>
			</div>
			<div class="find-result"></div>
			<div class="map map-home" id="map-canvas"></div>
		</section>	
		<section id="property-type" class="ads-type">
			<div class="container">
				<div class="ads-type">
					<div class="property-type-slide" data-navigation=".property-type-slide-nav">
						<div class="crsl-wrap">
							<figure class="crsl-item">
								<a href="#" class="item-type icon-1" data-type="apartement">
									<span class="title">Apartement</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
							<figure class="crsl-item">
								<a href="#" class="item-type icon-2" data-type="building-area">
									<span class="title">Building Area</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
							<figure class="crsl-item">
								<a href="#" class="item-type icon-3" data-type="condominium">
									<span class="title">Condominium</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
							<figure class="crsl-item">
								<a href="#" class="item-type icon-4" data-type="cottage">
									<span class="title">Cottage</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
							<figure class="crsl-item">
								<a href="#" class="item-type icon-5" data-type="family-house">
									<span class="title">Family House</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
							<figure class="crsl-item">
								<a href="#" class="item-type icon-6" data-type="single-home">
									<span class="title">Single Home</span>
									<span class="sub-title"><strong>0</strong> PLACES FOUND</span>
								</a>
							</figure>
						</div>
						<div class="property-type-slide-nav nav-box">
							<a href="#" class="previous"></a>
							<a href="#" class="next"></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="search-box" class="no-margin">
			<div class="container search-container fixed-map">
				<div class="search-options">
					<span class="botton-options"><i class="fa fa-chevron-down"></i> Show Advanced Search</span>
					<div class="searcher">
						<div class="row margin-div">
							<div class="col-sm-6 col-md-3 margin-bottom">
								<input class="form-control" type="text" name="keywords" id="keywords" placeholder="Keywords" />
							</div>
							<div class="col-sm-6 col-md-3">
								<select class="dropdown" data-settings='{"cutOff": 5}'>
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
							<div class="col-sm-6 col-md-3">
								<select class="dropdown" data-settings='{"cutOff": 5}'>
									<option value="">-- Any Purpose --</option>
									<option value="rent">Rent</option>
									<option value="sell">Sell</option>                        
								</select>
							</div>
							<div class="col-sm-6 col-md-3">
								<select class="dropdown" data-settings='{"cutOff": 5}'>
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
						</div>
						<div class="row margin-div sercher-margin-bottom">
							<div class="col-sm-6 col-md-3">
								<select class="dropdown">
									<option value="">-- Any Status --</option>
									<option value="Normal">Normal</option>
									<option value="Available">Available</option>
									<option value="Not Available">Not Available</option>
									<option value="Sold">Sold</option>
									<option value="Open House">Open House</option>
								</select>
							</div>
							<div class="col-sm-6 col-md-2 margin-bottom">
								<span id="label-bathroom" data-text="Bathroom"></span>
								<input class="form-control" type="text" name="bathroom" id="bathroom" value="3" />
							</div>
							<div class="col-sm-6 col-md-2 margin-bottom">
								<span id="label-bedroom" data-text="Bedroom"></span>
								<input class="form-control" type="text" name="bedroom" id="bedroom" value="2" />
							</div>
							<div class="col-sm-6 col-md-2 margin-bottom">
								<span id="label-property-size" data-text="Size"></span>
								<input class="form-control" type="text" name="property-size" id="property-size" value="120" />
							</div>
							<div class="col-sm-12 col-md-3 margin-bottom">
								<div class="slider" id="price-range"></div>
								<div class="price-slider price">
									<span id="price-value-min"></span> 
									<span class="separator">$</span>
									<span id="price-value-max"></span>					
								</div>
							</div>
						</div>
						<div class="row filter hide-filter hidden-xs hidden-sm">
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Swimming Pool" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Fire Extinguisher" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Close to School"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Air Conditioning" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Built-in Kitchen" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Business District"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Pet Allowed" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Health Club"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Balcony" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Dryer"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Solar Heat" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Wine Cellar" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Hospital"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Sport Club" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Golf Course"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Lake View"/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Backyard" checked/></div>
							<div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Laundry" checked/></div>
						</div>
						<div class="margin-div footer">
							<button type="button" class="btn btn-default more-button hidden-xs hidden-sm">More filters</button>
							<button type="button" class="btn btn-default search-button">advanced search</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="recent-list">
			<div class="section-detail">
				<h1>
				  <span>Prohome </span>
				  <span id="spinner-show">
					  <em class="current">Real Estate</em>
					  <span class="next"><span></span></span>
				  </span>
				  <span>Featured Homes</span>
				</h1>
				<ul id="spinner">
					 <li>Clients</li>
					 <li>Stellar Service</li>
					 <li>Simple Question</li>
					 <li>Home Valutation</li>
					 <li>Rentals</li>
				</ul>
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor, sagittis sed elementum dignissim, lobortis.</h2>		
			</div>
			<div class="container">
				<div class="list-box-title">
					<span><i class="icon fa fa-plus-square"></i>Recent Listed</span>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="box-ajout box-home enlever" >
							<a class="hover-effect image image-fill" href="property-detail.html">
								<span class="cover"></span>
								<img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
								<h3 class="title">59 Paterson Ave</h3>
							</a>
							<span class="price">$ 536.500,00</span>
							<span class="address"><i class="fa fa-map-marker"></i> Hoboken, NJ 07030</span>
							<span class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
							<div class="detail">
								<dt class="status">Status:</dt><dd><span>Sale</span></dd>
								<dt class="area">Area:</dt><dd><span>860m2</span></dd>
								<dt class="bed">Beds:</dt><dd><span>3</span></dd>
								<dt class="bath">Baths:</dt><dd><span>2</span></dd>
							</div>
							<div class="footer">
								<a class="btn btn-reverse" href="property-detail.html">Read now</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box-ajout box-home">
							<a class="hover-effect image image-fill" href="property-detail.html">
								<span class="cover"></span>
								<img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
								<h3 class="title">560 Marshall Dr</h3>
							</a>
							<span class="price">$ 709.000,00</span>
							<span class="address"><i class="fa fa-map-marker"></i> Hoboken, NJ 07056</span>
							<span class="description">Lorem Ipsum available, but the majority have suffered There are many variations of passages by injected humour.</span>
							<div class="detail">
								<dt class="status">Status:</dt><dd><span>Sale</span></dd>
								<dt class="area">Area:</dt><dd><span>420m2</span></dd>
								<dt class="bed">Beds:</dt><dd><span>4</span></dd>
								<dt class="bath">Baths:</dt><dd><span>1</span></dd>
							</div>
							<div class="footer">
								<a class="btn btn-reverse" href="property-detail.html">Read now</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box-ajout box-home enlever" >
							<a class="hover-effect image image-fill" href="property-detail.html">
								<span class="cover"></span>
								<img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
								<h3 class="title">477 Jersey Ave</h3>
							</a>
							<span class="price">$ 663.500,00</span>
							<span class="address"><i class="fa fa-map-marker"></i> Jersey City, NJ 07302</span>
							<span class="description">Nulla condimentum neque nulla. Sed at ornare lacus, id euismod felis. Aliquam et vulputate tortor. Nunc gravida nunc sed mi bibendum accumsan.</span>
							<div class="detail">
								<dt class="status">Status:</dt><dd><span>Sale</span></dd>
								<dt class="area">Area:</dt><dd><span>333m2</span></dd>
								<dt class="bed">Beds:</dt><dd><span>6</span></dd>
								<dt class="bath">Baths:</dt><dd><span>2</span></dd>
							</div>
							<div class="footer">
								<a class="btn btn-reverse" href="property-detail.html">Read now</a>
							</div>
						</div>
					</div>
				</div>
				<div class="list-box-title">
					<span><i class="icon fa fa-plus-square"></i>Featured Properties</span>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Praesent moleti ipsum</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">2<span>Apr</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Internet tend to repeat prunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Dolor sit amet</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">18<span>Mar</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Internet tend to redefined chunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail-full.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Pepeat predefined chunks</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">15<span>Mar</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Interno repeat predefined chunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="recent-news">
			<div class="section-detail">
				<h1>Recent News</h1>
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor, sagittis sed elementum dignissim, lobortis.</h2>		
			</div>
			<div class="container" id="blog">
				<div class="row">
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Praesent moleti ipsum</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">2<span>Apr</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Internet tend to repeat prunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Dolor sit amet</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">18<span>Mar</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Internet tend to redefined chunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail-full.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
					<div class="col-md-4">
						<div class="blog-list masonry-post">
							<h2 class="title"><a href="blog-detail.html">Pepeat predefined chunks</a></h2>
							<div class="image">
								<img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
								<div class="social">
									<span class="date">15<span>Mar</span></span>
									<a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
									<a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
									<a href="#"><i class="fa fa-comments"></i><span>69</span></a>
								</div>
							</div>
							<div class="text">
								<h3 class="subtitle">Interno repeat predefined chunks.</h3>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
							</div>
							<a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
						</div>
					</div>
				</div>
			</div>
		</section>

	</div>
);

const condition = authUser => !!authUser;
/*
export default compose(
	withAuthorization(condition),
)(HomePage);*/
export default HomePage;


