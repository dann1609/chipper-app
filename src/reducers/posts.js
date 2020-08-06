export const postsActions = {
  SET_POSTS: 'SET_POSTS',
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
    case postsActions.SET_POSTS:
      return {...state, ...{[action.postType]: action.list}};
    default:
      return state;
  }
};
