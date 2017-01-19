/**
*
* ParticipantListEntry
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ParticipantListEntry({key, participant}) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ParticipantListEntry.propTypes = {

};

export default ParticipantListEntry;
