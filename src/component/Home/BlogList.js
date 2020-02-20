import React from 'react';

class BlogList extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" id="blog">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="blog-list masonry-post">
                                <h2 className="title"><a href="blog-detail.html">Praesent moleti ipsum</a></h2>
                                <div className="image">
                                    <img className="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div className="social">
                                        <span className="date">2<span>Apr</span></span>
                                        <a href="#"><i className="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i className="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i className="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div className="text">
                                    <h3 className="subtitle">Internet tend to repeat prunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail.html" className="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog-list masonry-post">
                                <h2 className="title"><a href="blog-detail.html">Dolor sit amet</a></h2>
                                <div className="image">
                                    <img className="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div className="social">
                                        <span className="date">18<span>Mar</span></span>
                                        <a href="#"><i className="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i className="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i className="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div className="text">
                                    <h3 className="subtitle">Internet tend to redefined chunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail-full.html" className="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog-list masonry-post">
                                <h2 className="title"><a href="blog-detail.html">Pepeat predefined chunks</a></h2>
                                <div className="image">
                                    <img className="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div className="social">
                                        <span className="date">15<span>Mar</span></span>
                                        <a href="#"><i className="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i className="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i className="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div className="text">
                                    <h3 className="subtitle">Interno repeat predefined chunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail.html" className="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
      }
}

export default BlogList;