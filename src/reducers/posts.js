export const postsType = {
  SET_POSTS: 'SET_POSTS',
};

export const posts = (
  state = {
    list: [],
  },
  action,
) => {
  switch (action.type) {
    case postsType.SET_POSTS:
      return {...state, ...action.list};
    default:
      return state;
  }
};
