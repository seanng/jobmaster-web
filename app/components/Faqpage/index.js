/**
*
* Faqpage
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Faqpage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Faqpage.propTypes = {

};

export default Faqpage;
