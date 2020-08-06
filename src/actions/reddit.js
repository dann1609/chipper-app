import redditApi from '../api/redditApi';
import {postsTypes} from '../reducers/posts';
import Environments from '../config/environments';
import {setPosts} from './reducers/posts';

export function getRedditPosts(postType) {
  return function (dispatch, getState) {
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

    return redditApi.getRedditPosts(type).then((response) => {
      console.log(response);
      if (!response.error && response.data?.children) {
        dispatch(setPosts(response.data.children, postType));
      }
    });
  };
}
