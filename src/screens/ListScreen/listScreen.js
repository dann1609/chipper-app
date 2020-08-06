import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import listStyles from './listStyle';
import {getRedditPosts} from '../../actions/reddit';
import PostCard from '../../components/PostCard/PostCard';
import Environments from '../../config/environments';

const ListScreen = (props) => {
  const {dispatch, posts, postType, navigation} = props;

  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    if (refreshing) {
      dispatch(getRedditPosts(postType)).then(() => {
        setRefreshing(false);
      });
    }
  }, [refreshing]);

  const onRefresh = () => {
    setRefreshing(true);
  };

  const loadMoreContent = () => {};

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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onEndReached={loadMoreContent}
    />
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(ListScreen);
