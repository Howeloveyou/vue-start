import axios from 'axios';

export default {
  getRecord(data,callback, failCallback){
    axios.get('http://localhost:8060/record/getRecord',{
        params: {
          sid: data.sid,
        }
      })
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
  },
  getSignInfo(data,callback, failCallback){
    axios.get('http://localhost:8060/record/getSignInfo',{
      params: {
        sid: data.sid,
      }
    })
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
