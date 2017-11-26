const request = require('superagent');

const ROOT_URL = 'http://api.translink.ca';
const API_KEY = process.env.REACT_APP_TRANSLINK_API_TOKEN;

export const FETCH_BUS_DATA = 'FETCH_BUS_DATA';

export function getBusData(values, callback) {
  const req = 'req will go here';

  return {
    type: FETCH_BUS_DATA,
    payload: req
  }
}
