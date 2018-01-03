import axios from 'axios';

export default {
  toLogin(data,callback, failCallback){
    axios.get('http://',
      {
        data
      })
      .then((response) => {
        console.log('success');
        console.log(response);
        callback && callback();
      })
      .catch((error) => {
        console.log('failed');
        console.log(error);
        failCallback && failCallback();
      })
  }
}
