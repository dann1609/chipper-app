import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';

import listStyles from './listStyle';
import {getRedditPosts} from '../../actions/reddit';

const ListScreen = (props) => {
  const {dispatch} = props;

  useEffect(() => {
    dispatch(getRedditPosts());
  }, []);

  return (
    <ScrollView style={[listStyles.scene]}>
      <Text>Hola</Text>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.list,
});

export default connect(mapStateToProps)(ListScreen);
