import redditApi from '../api/redditApi';

export function getRedditPosts() {
  return function (dispatch, getState) {
    return redditApi.getRedditPosts().then((response) => {
      console.log(response);
    });
  };
}
