/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import H1 from 'components/H1';

function Heading({title}) {
  return (
    <H1>
      <FormattedMessage {...messages[title]} />
    </H1>
  );
}

Heading.propTypes = {

};

export default Heading;
