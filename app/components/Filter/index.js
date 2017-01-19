/**
*
* Filter
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import FilterSearchBar from 'components/FilterSearchBar';
import FilterTimeSlider from 'components/FilterTimeSlider';
import FilterStatusButtons from 'components/FilterStatusButtons';

function Filter({view, filter}) {

  const times  = filter.get('times'),
        status = filter.get('status'),
        search = filter.get('search');

  return (
    <div>
      <FilterSearchBar />
      {view === 'temporary' && <FilterTimeSlider times={times} />}
      <FilterStatusButtons active={status} />
    </div>
  );
}

Filter.propTypes = {

};

export default Filter;
