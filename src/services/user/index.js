import axios from 'axios';

/*
* Service to search a github user
* Expect a user login
* Return user's all details
* */

export const searchUser = async user => await axios.get(
  `https://api.github.com/users/${user}`, {
    timeout: 10000,
  },
)
  .then(response => response)
  .catch(error => error.response || {response: {status: 500}});

export default {searchUser}
