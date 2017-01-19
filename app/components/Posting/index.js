/**
*
* Posting
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Posting({post, clickPost}) {
  let id           = post.get('id'),
      company      = post.get('company'),
      jobRole      = post.get('jobRole'),
      jobType      = post.get('jobType'),
      status       = post.get('status'),
      payment      = post.get('payment'),
      date         = post.get('date'),
      startTime    = post.get('startTime'),
      endTime      = post.get('endTime'),
      logo         = post.get('logo'),
      participants = post.get('participants');

  return (
    <div onClick={clickPost.bind(this, participants)}>
      <FormattedMessage {...messages.header} />
      {jobType}
    </div>
  );
}

Posting.propTypes = {

};

export default Posting;
