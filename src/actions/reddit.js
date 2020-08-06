import redditApi from '../api/redditApi';
import {postsTypes} from '../reducers/posts';
import Environments from '../config/environments';
import {addPosts, setAfter, setPosts} from './reducers/posts';

const getEnvironmentByType = (postType) => {
  let type = Environments.NEW;
  switch (postType) {
    case postsTypes.HOT:
      type = Environments.NEW;
      break;
    case postsTypes.CONTROVERSIAL:
      type = Environments.CONTROVERSIAL;
      break;
    case postsTypes.TOP:
      type = Environments.TOP;
      break;
  }

  return type;
};

export function getRedditPosts(postType) {
  return function (dispatch, getState) {
    const type = getEnvironmentByType(postType);

    return redditApi.getRedditPosts(type).then((response) => {
      console.log(response);
      if (!response.error && response.data?.children) {
        dispatch(setAfter(response.data.after, postType));
        dispatch(setPosts(response.data.children, postType));
      }
    });
  };
}

export function getNextRedditPosts(postType) {
  return function (dispatch, getState) {
    const type = getEnvironmentByType(postType);

    const after = getState().posts[`after${postType}`];

    return redditApi.getRedditPosts(type, after).then((response) => {
      if (!response.error && response.data?.children) {
        dispatch(setAfter(response.data.after, postType));
        dispatch(addPosts(response.data.children, postType));
      }
    });
  };
}
