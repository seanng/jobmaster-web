import Auth from 'j-toker';

function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function requestWithToken (email, password) {
  const apiUrl = `http://localhost:3000/master_auth`;

  Auth.configure({
    apiUrl,
    emailSignInPath: '/sign_in'
   });

  Auth.emailSignIn({ email, password })
  .then(checkStatus)
  .then(parseJSON);
}