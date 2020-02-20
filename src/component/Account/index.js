import AccountPage from './AccountPage'

import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';

const Page = () => (
     <AuthUserContext.Consumer> 
      {authUser => (
            <AccountPage authUser = {authUser}/>
        )}
     </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Page);