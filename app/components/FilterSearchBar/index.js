/**
*
* FilterSearchBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function FilterSearchBar() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

FilterSearchBar.propTypes = {

};

export default FilterSearchBar;
