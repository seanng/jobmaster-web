/**
*
* SelectPostType
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import H2 from 'components/H2';

function SelectPostType({selected, clickPostType}) {

  const classType = (type) => selected === type ? 'form-option-selected' : 'form-option-unselected';

  return (
    <div className="row">
      <FormattedMessage {...messages.prompt} />
      <div className="row">
        <div onClick={clickPostType.bind(this, 'temporary')} className={`col-sm-6 ${classType('temporary')}`}>
          <H2>
            <FormattedMessage {...messages.tempOptionTitle} />
          </H2>
          <FormattedMessage {...messages.tempOptionDesc} />
        </div>
        <div onClick={clickPostType.bind(this, 'permanent')} className={`col-sm-6 ${classType('permanent')}`}>
          <H2>
            <FormattedMessage {...messages.permOptionTitle} />
          </H2>
          <FormattedMessage {...messages.permOptionDesc} />
        </div>
      </div>
    </div>
  );
}

SelectPostType.propTypes = {

};

export default SelectPostType;
