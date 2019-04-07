import axios from 'axios';

const KEY = 'AIzaSyB3J6IT_3Himrd3ei6i4Mm4-ANhpqjlCME';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
