import $ from 'jquery';

const APP_ID = 'kE616t2jfc6thbZFqNgsrbOddZyIYz6PWha334Mr';
const API_KEY = 'hlISmce1ln6HF06U0YTwTE2vlaH79aX6JER2ECqa';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});