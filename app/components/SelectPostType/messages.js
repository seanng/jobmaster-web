/*
 * SelectPostType Messages
 *
 * This contains all the text for the SelectPostType component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SelectPostType.header',
    defaultMessage: 'This is the SelectPostType component !',
  },
  prompt: {
    id: 'app.components.SelectPostType.prompt',
    defaultMessage: 'What type of job are you posting?',
  },
  tempOptionTitle: {
    id: 'app.components.SelectPostType.tempOptionTitle',
    defaultMessage: 'Temporary',
  },
  tempOptionDesc: {
    id: 'app.components.SelectPostType.tempOptionDesc',
    defaultMessage: 'This type of post is for hiring one off workers and temporary staff.\nThere would be a specific start and end time.',
  },
  permOptionTitle: {
    id: 'app.components.SelectPostType.permOptionTitle',
    defaultMessage: 'Permanent',
  },
  permOptionDesc: {
    id: 'app.components.SelectPostType.permOptionDesc',
    defaultMessage: 'This type of post is for hiring freelance, part time or full time staff.\nThere is no specific start and end time.',
  },
});
