/**
*
* FilterTimeSlider
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function FilterTimeSlider() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

FilterTimeSlider.propTypes = {

};

export default FilterTimeSlider;
