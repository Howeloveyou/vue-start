import axios from 'axios';

export default {
  getRoomList(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/getRoomList',{
        params: {
          date: data.date,
          times: data.times,
          page:data.currentPage,
          pageSize:data.pageSize
        }
      }
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
  },

  getSeatList(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/getSeatList',{
        params: {
          rid:data.rid,
          date: data.date,
          times: data.times
        }
      }
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
  },
  getRoom(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/getRoom',{
        params: {
          rid:data.rid
        }
      }
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
  },
  toReservation(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/toReservation',{
        params: {
          sid:data.sid,
          date:data.date,
          time:data.times,
          rid:data.rid,
          seid:data.seid,
        }
      }
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
  },
  cancelReservation(data,callback, failCallback){
    axios.get('http://localhost:8060/reservation/cancelReservation',{
        params: {
          sid:data.sid
        }
      }
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
  },
}
