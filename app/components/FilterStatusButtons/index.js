/**
*
* FilterStatusButtons
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';



function FilterStatusButtons({active}) {

  const StatusButton = (status) => {
    let buttonColor = status === active ? 'btn-primary' : 'btn-default';

    return (
      <button className={`btn ${buttonColor}`}>
        <FormattedMessage {...messages[status]} />
      </button>
    )
  }

  return (
    <div>
      { StatusButton('all') }
      { StatusButton('active') }
      { StatusButton('pending') }
      { StatusButton('filled') }
      { StatusButton('expired') }
    </div>
  );
}

FilterStatusButtons.propTypes = {

};

export default FilterStatusButtons;