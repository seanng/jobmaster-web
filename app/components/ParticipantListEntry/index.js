/**
*
* ParticipantListEntry
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ParticipantListEntry({participant}) {
  return (
    <div>
      {participant.get('name')}
    </div>
  );
}

ParticipantListEntry.propTypes = {

};

export default ParticipantListEntry;
