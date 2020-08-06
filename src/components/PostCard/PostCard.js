import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import moment from 'moment';

import postCardStyles from './postCardStyle';

const PostCard = (props) => {
  const {post, onPress} = props;
  const {
    title,
    author_fullname,
    score,
    num_comments,
    created_utc,
    thumbnail,
  } = post;

  const formatedCreated = moment(created_utc * 1000).fromNow();

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={postCardStyles.postCard}>
        <Image style={postCardStyles.image} source={{uri: thumbnail}} />
        <View style={postCardStyles.textContainer}>
          <Text style={postCardStyles.title}>{title}</Text>
          <View style={postCardStyles.minorInfoContainer}>
            <Text
              style={
                postCardStyles.minorInfo
              }>{`Author:\n${author_fullname}`}</Text>
            <Text
              style={
                postCardStyles.minorInfo
              }>{`Comments:\n${num_comments}`}</Text>
            <Text style={postCardStyles.minorInfo}>{`Score:\n${score}`}</Text>
          </View>
          <View style={postCardStyles.dateContainer}>
            <Text>Created:</Text>
            <Text>{formatedCreated}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default PostCard;
