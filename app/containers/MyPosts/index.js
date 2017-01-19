/*
 *
 * MyPosts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getView, getPosts, getParticipantList } from './selectors';
import { switchView, setParticipantList } from './actions';

// Components
import Heading from 'components/Heading';
import Tab from 'components/Tab';
import CreatePostButton from 'components/CreatePostButton';
import Filter from 'components/Filter';
import Feed from 'components/Feed';
import ParticipantList from 'components/ParticipantList';

export class MyPosts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Heading title={'myPosts'} />
          <Tab
            title={'temporary'}
            clickTab={this.props.clickTab.bind(this)}
            view={this.props.view} />
          <Tab
            title={'permanent'}
            clickTab={this.props.clickTab.bind(this)}
            view={this.props.view} />
          <CreatePostButton />
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <Filter />
          </div>
          <div className='col-sm-6'>
            <Feed
              posts={this.props.posts}
              clickPost={this.props.clickPost.bind(this)}/>
          </div>
          <div className='col-sm-3'>
            <ParticipantList
              participants={this.props.participants} />
          </div>
        </div>
      </div>
    );
  }
}

MyPosts.propTypes = {
  clickTab: PropTypes.func.isRequired,
  clickPost: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  posts: getPosts(),
  participants: getParticipantList()
});

const mapDispatchToProps = (dispatch) => ({
  clickTab: (viewTitle) => {
    dispatch(switchView(viewTitle));
  },
  clickPost: (participants) => {
    // if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(setParticipantList(participants));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
