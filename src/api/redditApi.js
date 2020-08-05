import Environments from '../config/environments';

export default {
  getRedditPosts: function () {
    const redditPostsUrl = `${Environments.BASE}${Environments.POST_BASE}${Environments.HOT}`;
    //console.log(redditPostsUrl);
    return fetch(redditPostsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log('reddit posts error');
        console.log(redditPostsUrl);
        console.error(error);
        return {
          error: {
            message: "Can't reach server",
          },
        };
      });
  },
};
