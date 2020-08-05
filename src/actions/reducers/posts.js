import {postsType} from '../../reducers/posts';

export const setPosts = (postsList) => {
  return {
    type: postsType.SET_POSTS,
    list: postsList,
  };
};
