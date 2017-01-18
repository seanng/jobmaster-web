/**
*
* Filter
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Filter() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Filter.propTypes = {

};

export default Filter;
