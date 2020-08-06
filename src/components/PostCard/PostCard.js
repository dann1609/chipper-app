import React from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment';

import postCardStyles from './postCardStyle';

const PostCard = (props) => {
  const {post} = props;
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
    <View style={postCardStyles.postCard}>
      <Image style={postCardStyles.image} source={{uri: thumbnail}} />
      <View style={postCardStyles.textContainer}>
        <Text style={postCardStyles.title}>{title}</Text>
        <View style={postCardStyles.minorInfoContainer}>
          <Text style={postCardStyles.minorInfo}>{author_fullname}</Text>
          <Text style={postCardStyles.minorInfo}>{num_comments}</Text>
          <Text style={postCardStyles.minorInfo}>{score}</Text>
        </View>
        <Text>{formatedCreated}</Text>
      </View>
    </View>
  );
};

export default PostCard;
