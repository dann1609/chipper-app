import {postsActions} from '../../reducers/posts';

export const setPosts = (postsList, postType) => {
  return {
    type: postsActions.SET_POSTS,
    list: postsList,
    postType,
  };
};

export const setAfter = (afterId, postType) => {
  return {
    type: postsActions.SET_AFTER,
    afterId,
    afterPostType: `after${postType}`,
  };
};

export const addPosts = (postsList, postType) => {
  return {
    type: postsActions.ADD_POSTS,
    list: postsList,
    postType,
  };
};
