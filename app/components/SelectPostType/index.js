/**
*
* SelectPostType
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SelectPostType() {
  return (
    <div>
      'selectposttype'
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SelectPostType.propTypes = {

};

export default SelectPostType;
