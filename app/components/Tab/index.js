/**
*
* Tab
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Tab({title, clickTab, view}) {
  const Span = title === view ? styled.span`
    color: black;
    font-weight: 600;
  ` : styled.span`
    color: gray;
    cursor: pointer;
  `

  return (
    <Span
      onClick={clickTab.bind(this, title)}
    >
      <FormattedMessage {...messages[title]} />
    </Span>
  );
}

Tab.propTypes = {

};

export default Tab;
