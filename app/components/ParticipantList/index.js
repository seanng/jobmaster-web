/**
*
* ParticipantList
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ParticipantList = () => {

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ParticipantList.propTypes = {

};

export default ParticipantList;
