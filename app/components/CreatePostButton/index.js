/**
*
* CreatePostButton
*
*/

import React from 'react';
import { Link } from 'react-router';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function CreatePostButton() {
  return (
    <Link to="/createpost">
      <FormattedMessage {...messages.header} />
    </Link>
  );
}

CreatePostButton.propTypes = {

};

export default CreatePostButton;
