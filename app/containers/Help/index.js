/*
 *
 * Help
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getView } from './selectors';
import { switchView } from './actions';

// Components
import Heading from 'components/Heading';
import Tab from 'components/Tab';
import FAQpage from 'components/FAQpage';
import ContactUs from 'components/ContactUs';

export class Help extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-6'>
            <Heading title={'help'} />
          </div>
          <div className='col-xs-6'>
            <Tab
              title={'faq'}
              clickTab={this.props.clickTab.bind(this)}
              view={this.props.view} />
            <Tab
              title={'contactUs'}
              clickTab={this.props.clickTab.bind(this)}
              view={this.props.view} />
          </div>
        </div>
        <div className='row'>
          { (this.props.view === 'faq') ?
            (<FAQpage />) : (<ContactUs />) }
        </div>
      </div>
    );
  }
}

Help.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
});

const mapDispatchToProps = (dispatch) => ({
  clickTab: (viewTitle) => {
    dispatch(switchView(viewTitle))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Help);
