/**
*
* ContactUs
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContactUs() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactUs.propTypes = {

};

export default ContactUs;
