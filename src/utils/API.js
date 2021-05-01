import axios from 'axios';
const URL = 'https://randomuser.me/api/'

export default {

    generateUser: function () {
        return axios.get(URL + '?results=20&nat=us')
    }

}