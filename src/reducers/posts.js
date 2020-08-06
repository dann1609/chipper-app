export const postsActions = {
  SET_AFTER: 'SET_AFTER',
  SET_POSTS: 'SET_POSTS',
  ADD_POSTS: 'ADD_POSTS',
};

export const postsTypes = {
  HOT: 'hot',
  NEW: 'new',
  CONTROVERSIAL: 'controversial',
  TOP: 'top',
};

export const posts = (
  state = {
    [postsTypes.HOT]: [],
    [postsTypes.NEW]: [],
    [postsTypes.CONTROVERSIAL]: [],
    [postsTypes.TOP]: [],
  },
  action,
) => {
  switch (action.type) {
    case postsActions.SET_AFTER:
      return {...state, ...{[action.afterPostType]: action.afterId}};
    case postsActions.SET_POSTS:
      return {...state, ...{[action.postType]: action.list}};
    case postsActions.ADD_POSTS:
      return {
        ...state,
        ...{[action.postType]: state[action.postType].concat(action.list)},
      };
    default:
      return state;
  }
};
