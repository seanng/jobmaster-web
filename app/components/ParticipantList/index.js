/**
*
* ParticipantList
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ParticipantListEntry from 'components/ParticipantListEntry'

const ParticipantList = ({participants}) => {
  if (!participants) {
    return (<div />)
  } else if (participants.size) {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        {
          participants.map((participant, i)=> <ParticipantListEntry
              key={i}
              participant={participant} />)
        }
      </div>
    )
  } else {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <FormattedMessage {...messages.noParticipants} />
      </div>
    )
  }
}

ParticipantList.propTypes = {

};

export default ParticipantList;
