var axios = require('axios');
var querystring = require('querystring');
module.exports = {

  createLift:function (body) {
    var url = `${process.env.URL}lifts`;
    var accessToken = localStorage.getItem('access_token');
    return axios.post(url, body, {headers: {"x-auth":accessToken}});
  },
  getLifts:function (query) {
    var url = `${process.env.URL}lifts`;
    var accessToken = localStorage.getItem('access_token');
    console.log(querystring.stringify(query));
    return axios.get(url + "?" +querystring.stringify(query), {headers: {"x-auth":accessToken}});
  }
}
