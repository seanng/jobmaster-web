/*
 *
 * CreatePost
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {getFormType} from './selectors';
import messages from './messages';
import { setFormType } from './actions';


// Components
import Heading from 'components/Heading';
import SelectPostType from 'components/SelectPostType';
import CreatePostForm from 'components/CreatePostForm';

export class CreatePost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <div className="row">
          <Heading title={'createPost'} />
        </div>
        <SelectPostType
          selected={this.props.formType}
          clickPostType={this.props.clickPostType.bind(this)} />
        <CreatePostForm
          formType={this.props.formType} />
      </div>
    );
  }
}

CreatePost.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  formType: getFormType()
});

const mapDispatchToProps = (dispatch) => ({
  clickPostType: (jobType) => {
    dispatch(setFormType(jobType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
