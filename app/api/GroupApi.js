var axios = require('axios')
module.exports = {

  createGroup:function (name, description) {
    var url = `${process.env.URL}groups`;
    var accessToken = localStorage.getItem('access_token');
    return axios.post(url, {name, description}, {headers: {"x-auth":accessToken}});
  },
  searchGroups:function (query){
    var url = `${process.env.URL}groups/search/${query}`;
    var accessToken = localStorage.getItem('access_token');
    return axios.get(url, {headers: {"x-auth":accessToken}});
  },
  getAllGroups:function (){
    var url = `${process.env.URL}groups/`;
    var accessToken = localStorage.getItem('access_token');
    return axios.get(url, {headers: {"x-auth":accessToken}});
  },
  getGroupById:function (id){
    var url = `${process.env.URL}groups/${id}`;
    var accessToken = localStorage.getItem('access_token');
    return axios.get(url, {headers: {"x-auth":accessToken}});
  },
  requestJoinGroup:function (groupId, message){
    var url = `${process.env.URL}perms/`;
    var accessToken = localStorage.getItem('access_token');
    return axios.post(url, {group_id:groupId, message}, {headers: {"x-auth":accessToken}});
  },
  getAllJoinRequests:function (){
    var url = `${process.env.URL}perms/`;
    var accessToken = localStorage.getItem('access_token');
    return axios.get(url, {headers: {"x-auth":accessToken}});
  },
  acceptJoin:function (applicantId, groupId, isAccept){

    var endPath = isAccept ? 'accept' : 'reject'
    var url = `${process.env.URL}perms/${endPath}`;
    var accessToken = localStorage.getItem('access_token');
    return axios.post(url, {applicant_id:applicantId, group_id:groupId }, {headers: {"x-auth":accessToken}});
  }

}
