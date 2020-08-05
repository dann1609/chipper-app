import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ListScreen from '../ListScreen/listScreen';

const initialLayout = {width: Dimensions.get('window').width};

function MainScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'new', title: 'New'},
    {key: 'top', title: 'Top'},
    {key: 'popular', title: 'Popular'},
    {key: 'hot', title: 'Hot'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'new':
        return <ListScreen />;
      case 'top':
        return <ListScreen />;
      case 'popular':
        return <ListScreen />;
      case 'hot':
        return <ListScreen />;
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
