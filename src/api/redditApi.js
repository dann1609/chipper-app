import Environments from '../config/environments';
import {postsTypes} from '../reducers/posts';

export default {
  getRedditPosts: function (postType) {
    let type = postType || Environments.NEW;
    const redditPostsUrl = `${Environments.BASE}${Environments.POST_BASE}${type}`;
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
