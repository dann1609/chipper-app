import {postsActions, postsTypes} from '../../reducers/posts';

export const setPosts = (postsList, postType) => {
  return {
    type: postsActions.SET_POSTS,
    list: postsList,
    postType,
  };
};
