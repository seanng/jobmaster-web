/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Title = styled.span`
  color: red;
`;

function Heading({title}) {
  return (
    <Title>
      <FormattedMessage {...messages[title]} />
    </Title>
  );
}

Heading.propTypes = {

};

export default Heading;
