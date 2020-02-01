import React, {Component} from 'react';

export default class AccountPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render()
    {
        return(
            <section id="user-profile">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-md-3">
                            <div class="agent-box-card grey">
                                <div class="image-content">
                                    <div class="image image-fill">
                                        <img alt="Image Sample" src="http://placehold.it/512/bbbbbb/ffffff"/>
                                    </div>
                                </div>
                                <div class="info-agent">
                                    <span class="name">Diane Hayes</span>
                                    <ul class="contact">
                                        <li><a href="#" class="icon"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#" class="icon"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href="#" class="icon"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#" class="icon"><i class="fa fa-envelope-o"></i></a></li>
                                        <li><a href="agent-detail.html" class="icon"><i class="fa fa-info-circle"></i></a></li>
                                    </ul>						
                                </div>
                            </div>
                            <br />
                            <ul class="block-menu">
                                <li><a class="faq-button active" href="profile.html"><i class="icon fa fa-user-secret"></i> Profile</a></li>
                                <li><a class="faq-button" href="my-properties.html"><i class="icon fa fa-home"></i> My trip</a></li>
                                <li><a class="faq-button" href="bookmarked.html"><i class="icon fa fa-heart"></i> Bookmarked</a></li>
                                <li><a class="faq-button" href="new-property.html"><i class="icon fa fa-plus"></i> Create New trip</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-8 col-md-9">

                            <div class="row">
                                <div class="col-md-7">
                                    <div class="section-title line-style no-margin">
                                        <h3 class="title">General Info</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li class="disabled">
                                            <span>Username</span> Tremont
                                        </li>
                                        <li>
                                            <span>Name</span> Diane Hayes
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Password</span> &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                                        </li>
                                        <li>
                                            <span>Place of birth</span> New York, NY
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Date of birth</span> 18/01/1973 
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li class="fullwidth">
                                            <span>Short About</span> 
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus dui massa, ac rhoncus nisl blandit in. Sed dapibus vehicula felis, eu tempor odio mollis vitae. Sed sollicitudin nibh quis luctus aliquam.<br /><br />Cras ornare in ligula ut iaculis. Vestibulum ultricies imperdiet tempor. Maecenas at mi eu nunc accumsan ultricies.</p>
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                    </ul>
                                    <div class="section-title line-style">
                                        <h3 class="title">Basic Contact</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li>
                                            <span>Email</span> 
                                            admin@Trip.com
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li>
                                            <span>Skype</span> 
                                            diane.hayes<i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Phone</span> 
                                            (011) 265 98745
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                    </ul>
                                    <div class="section-title line-style">
                                        <h3 class="title">Socian Network</h3>
                                        <i class="icon fa fa-cog"></i>
                                    </div>
                                    <ul class="profile">
                                        <li>
                                            <span>Facebook</span> 
                                            http://facebook.com/diane.hayes-Trip.com 
                                            <i class="icon fa fa-pencil"></i>
                                            <i class="set-privacy fa fa-lock"></i>
                                        </li>
                                        <li>
                                            <span>Twitter</span> 
                                            @diane.Trip.com 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Google+</span> 
                                            @diane.Trip 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                        <li>
                                            <span>Web</span> 
                                            http://www.Trip.com/ 
                                            <i class="icon fa fa-pencil"></i>
                                        </li>
                                    </ul>
                                    <div class="bs-callout callout-danger">
                                        <h4 class="title">Nullam sodales lorem sit amet</h4>
                                        <p class="text">Integer euismod cursus dolor. Curamet pellentesque sed, sodales at augue.</p>
                                    </div>
                                  
                                </div>
                                <div class="col-md-5">
                                    <div class="section-title line-style no-margin space-form">
                                        <h3 class="title">Activity Log</h3>
                                    </div>
                                    <div class="logs">
                                        <span class="data"><span>March 14, 2015</span></span>
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text">
                                                <strong>Curabitur</strong> at condimentum arcu, ac viverra erat. Curabitur nec cursus erat, in lacinia libero. Etiam elementum et dui sit amet ornare. Proin a risus ullamcorper, aliquet lorem non, ornare purus.
                                                <img src="http://placehold.it/116x70/bbbbbb/ffffff" alt="Image Sample" />
                                                <img src="http://placehold.it/116x70/bbbbbb/ffffff" alt="Image Sample" />
                                            </span>
                                            <span class="data">Today 12:30</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Suspendisse</strong>  porttitor, tortor nec aliquet dignissim, urna sapien interdum sapien</span>
                                            <span class="data">Today 10:16</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <span class="data"><span>December 13, 2014</span></span>
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                                            <span class="data">Yesterday 22:42</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                                            <span class="data">Yesterday 16:01</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                                            <span class="data">Yesterday 22:42</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <span class="data"><span>November 30, 2014</span></span>
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                                            <span class="data">Yesterday 16:01</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                                            <span class="data">Yesterday 22:42</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                                            <span class="data">Yesterday 22:42</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div> 
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                                            <span class="data">Yesterday 16:01</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div>
                                        <div class="log">
                                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                                            <span class="data">Yesterday 22:42</span>
                                            <a href="#"><i class="fa fa-times"></i></a>
                                        </div>
                                        <input type="button" class="btn btn-default button" value="Load more" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}