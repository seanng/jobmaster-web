/**
*
* Tab
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Tab({title, click, view}) {
  console.log('title', title, 'view', view);
  const Span = title === view ? styled.span`
    color: blue;
  ` : styled.span`
    color: green;
  `;

  return (
    <Span
      onClick={click.bind(this, title)}
    >
      <FormattedMessage {...messages[title]} />
    </Span>
  );
}

Tab.propTypes = {

};

export default Tab;