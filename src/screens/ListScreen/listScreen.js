import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';

import listStyles from './listStyle';
import {getRedditPosts} from '../../actions/reddit';
import PostCard from '../../components/PostCard/PostCard';

const ListScreen = (props) => {
  const {dispatch, posts, postType} = props;

  useEffect(() => {
    dispatch(getRedditPosts(postType));
  }, []);

  const renderPosts = () => {
    return posts[postType].map((post) => <PostCard post={post.data} />);
  };

  return <ScrollView style={[listStyles.scene]}>{renderPosts()}</ScrollView>;
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(ListScreen);
