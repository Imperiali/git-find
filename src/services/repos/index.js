import axios from 'axios';

/*
* Service to search some github user repositories
* Expect the user login
* Return all the user's repositories
* */

export const searchUserRepo = async user => await axios.get(
  `https://api.github.com/users/${user}/repos`, {
    timeout: 10000,
  },
)
  .then(response => response)
  .catch(error => error.response || {response: {status: 500}});

export default {searchUserRepo}
