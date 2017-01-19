/**
*
* Posting
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Posting({post}) {
  let company   = post.get('company'),
      jobRole   = post.get('jobRole'),
      jobType   = post.get('jobType'),
      status    = post.get('status'),
      payment   = post.get('payment'),
      date      = post.get('date'),
      startTime = post.get('startTime'),
      endTime   = post.get('endTime'),
      logo      = post.get('logo');

  return (
    <div>
      <FormattedMessage {...messages.header} />
      {date}
    </div>
  );
}

Posting.propTypes = {

};

export default Posting;
