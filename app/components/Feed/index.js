/**
*
* Feed
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Feed() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Feed.propTypes = {

};

export default Feed;
