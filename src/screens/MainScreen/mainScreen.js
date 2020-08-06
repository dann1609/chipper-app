import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ListScreen from '../ListScreen/listScreen';
import {postsTypes} from '../../reducers/posts';

const initialLayout = {width: Dimensions.get('window').width};

function MainScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'new', title: 'New'},
    {key: 'top', title: 'Top'},
    {key: 'controversial', title: 'Controversial'},
    {key: 'hot', title: 'Hot'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'new':
        return <ListScreen postType={postsTypes.NEW} />;
      case 'top':
        return <ListScreen postType={postsTypes.TOP} />;
      case 'controversial':
        return <ListScreen postType={postsTypes.CONTROVERSIAL} />;
      case 'hot':
        return <ListScreen postType={postsTypes.HOT} />;
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default MainScreen;
