import fetch from 'isomorphic-unfetch';

export default (url, params) => {
  return fetch(`http://localhost:3005${url}`)
    .then(response => response.json());
};
