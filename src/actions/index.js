import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=abshcndgsfdg';

export function fetchPosts() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`http://restedblog.herokuapp.com/chetan/api/`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  console.log(props);
  const request = axios.post(
    `http://restedblog.herokuapp.com/chetan/api/`,
    props
  );
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`http://restedblog.herokuapp.com/chetan/api/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(
    `http://restedblog.herokuapp.com/chetan/api/${id}`
  );
  return {
    type: DELETE_POST,
    payload: request
  };
}
