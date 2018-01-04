import axios from 'axios';

export default {
  getRoomList(callback, failCallback){
    axios.get('http://localhost:8060/reservation/getRoomList'
      )
      .then((response) => {
        console.log('success');
        console.log(response.data);
        callback && callback(response.data);
      })
      .catch((error) => {
        console.log('failed');
        console.log(error);
        failCallback && failCallback(error);
      })
  }
}
