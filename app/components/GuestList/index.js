/**
*
* GuestList
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function GuestList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

GuestList.propTypes = {

};

export default GuestList;
