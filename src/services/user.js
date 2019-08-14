import axios from 'axios';

export const searchUser = async user => await axios.get(
  `https://api.github.com/users/${user}`, {
    timeout: 10000,
  },
)
  .then(response => response)
  .catch(error => error.response || {response: {status: 500}});

export default {searchUser}
