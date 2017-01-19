/**
*
* Feed
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// import components
import Posting from 'components/Posting';


const Feed = ({posts}) => {
  return (
    <div>
      {
        posts.map((post, i)=> <Posting
          key={i}
          post={post} />)
      }
    </div>
  );
}

Feed.propTypes = {

};

export default Feed;
