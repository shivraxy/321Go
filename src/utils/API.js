import axios from 'axios';

const BASEURL = "https://www.eventbriteapi.com/v3/events/search/?"; 
const APIKEY = "&token=H5WZG2EZZ44ZLULGYPN5"; //move to a separate keys file

export default {
  search: function(keywords, location) {
    // need to replace spaces between keywords with & to support multi-word search terms
    return axios.get(`${BASEURL}q=${keywords}&location.address=${location}${APIKEY}`);
  }
};