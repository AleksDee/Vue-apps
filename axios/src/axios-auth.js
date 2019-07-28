import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://test-988c3.firebaseio.com'
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});

// instance.defaults.headers.common['something'] = 'something'

export default instance