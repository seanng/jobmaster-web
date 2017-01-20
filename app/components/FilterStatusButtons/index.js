/**
*
* FilterStatusButtons
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';



function FilterStatusButtons({active, clickStatusButton}) {

  const StatusButton = (status) => {

    const StyledButton = status === active ? styled.div`
      color: black;
      font-weight: 600;
    ` : styled.div`
      color: gray;
      cursor: pointer;
    `

    return (
      <StyledButton onClick={clickStatusButton.bind(this, 'status', status)}>
        <FormattedMessage {...messages[status]} />
      </StyledButton>
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
