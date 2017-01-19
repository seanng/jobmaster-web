/*
 *
 * MyPosts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { getView, getPosts } from './selectors';
import { switchView } from './actions';
import messages from './messages';

// Components
import Heading from 'components/Heading';
import Tab from 'components/Tab';
import Filter from 'components/Filter'
import Feed from 'components/Feed'
import ParticipantList from 'components/ParticipantList'

export class MyPosts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Heading title={'myPosts'} />
          <Tab
            title={'temporary'}
            click={this.props.clickTab.bind(this)}
            view={this.props.view} />
          <Tab
            title={'permanent'}
            click={this.props.clickTab.bind(this)}
            view={this.props.view} />
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <Filter />
          </div>
          <div className='col-sm-6'>
            <Feed posts={this.props.posts}/>
          </div>
          <div className='col-sm-3'>
            <ParticipantList />
          </div>
        </div>
      </div>
    );
  }
}

MyPosts.propTypes = {
  clickTab: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  posts: getPosts()
});

const mapDispatchToProps = (dispatch) => ({
  clickTab: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(switchView(evt));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
