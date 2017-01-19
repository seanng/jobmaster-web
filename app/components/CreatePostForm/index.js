/**
*
* CreatePostForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const tempForm = (
  <div>
    this is the temp form
  </div>
);

const permForm = (
  <div>
    this is the perm form
  </div>
)


function CreatePostForm({formType}) {
  console.log(formType);
  if (formType === 'temporary') {
    return tempForm
  } else if (formType === 'permanent') {
    return permForm
  } else {
    return <div />
  }
}

CreatePostForm.propTypes = {

};

export default CreatePostForm;
