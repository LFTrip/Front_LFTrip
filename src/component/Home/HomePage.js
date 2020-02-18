import React from 'react';
import Map from './Map';
import SearchTravelForm from './SearchTravelForm';
import TripTeaser from './TripTeaser';
import BlogTeaser from './BlogTeaser';

import { compose } from 'recompose';
import { withAuthorization } from '../Session';


class HomePage extends React.Component{
	constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Map />
				<SearchTravelForm />
				<TripTeaser />
				<BlogTeaser />
            </React.Fragment>
        );
      }
}


const condition = authUser => !!authUser;
/*
export default compose(
	withAuthorization(condition),
)(HomePage);*/
export default HomePage;


