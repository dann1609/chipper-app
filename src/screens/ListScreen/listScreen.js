import React, {useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {connect} from 'react-redux';

import listStyles from './listStyle';
import {getRedditPosts} from '../../actions/reddit';
import PostCard from '../../components/PostCard/PostCard';
import Environments from '../../config/environments';

const ListScreen = (props) => {
  const {dispatch, posts, postType, navigation} = props;

  useEffect(() => {
    dispatch(getRedditPosts(postType));
  }, []);

  const renderPost = ({item}) => (
    <PostCard
      post={item.data}
      onPress={() =>
        navigation.navigate('details', {
          link: `${Environments.WEB_BASE}${item.data.permalink}`,
        })
      }
    />
  );

  const getPostData = () => {
    return posts[postType];
  };

  return (
    <FlatList
      style={[listStyles.scene]}
      data={getPostData()}
      renderItem={renderPost}
    />
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(ListScreen);
