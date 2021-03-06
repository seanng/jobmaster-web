/*
 *
 * MyPosts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getView, getPosts, getParticipantList, getFilter } from './selectors';
import { loadPosts, switchView, setParticipantList, setFilter } from './actions';

// Components
import Heading from 'components/Heading';
import Tab from 'components/Tab';
import CreatePostButton from 'components/CreatePostButton';
import Filter from 'components/Filter';
import Feed from 'components/Feed';
import ParticipantList from 'components/ParticipantList';

export class MyPosts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state is not null, submit the form to load repos
   */
  componentWillMount() {
    this.props.preloadData(1);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <Heading title={'myPosts'} />
          </div>
          <div className='col-sm-4'>
            <Tab
              title={'temporary'}
              clickTab={this.props.clickTab.bind(this)}
              view={this.props.view} />
            <Tab
              title={'permanent'}
              clickTab={this.props.clickTab.bind(this)}
              view={this.props.view} />
          </div>
          <div className='col-sm-4'>
            <CreatePostButton />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <Filter
              view={this.props.view}
              filter={this.props.selectedFilter}
              clickStatusButton={this.props.clickStatusButton.bind(this)}/>
          </div>
          <div className='col-sm-6'>
            <Feed
              posts={this.props.posts}
              clickPost={this.props.clickPost.bind(this)} />
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
  participants: getParticipantList(),
  selectedFilter: getFilter()
});

const mapDispatchToProps = (dispatch) => ({
  preloadData: (page) => {
    dispatch(loadPosts(page));
  },
  clickTab: (viewTitle) => {
    dispatch(setParticipantList(null));
    dispatch(switchView(viewTitle));
  },
  clickPost: (participants) => {
    dispatch(setParticipantList(participants));
  },
  clickStatusButton: (key, value) => {
    dispatch(setFilter(key, value));
    // dispatch(filterPosts())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
