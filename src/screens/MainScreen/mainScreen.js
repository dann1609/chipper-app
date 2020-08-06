import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import mainStyles from './mainStyle';
import ListScreen from '../ListScreen/listScreen';
import {postsTypes} from '../../reducers/posts';
import color from '../../common/color';

const initialLayout = {width: Dimensions.get('window').width};

function MainScreen(props) {
  const {navigation} = props;

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
        return <ListScreen navigation={navigation} postType={postsTypes.NEW} />;
      case 'top':
        return <ListScreen navigation={navigation} postType={postsTypes.TOP} />;
      case 'controversial':
        return (
          <ListScreen
            navigation={navigation}
            postType={postsTypes.CONTROVERSIAL}
          />
        );
      case 'hot':
        return <ListScreen navigation={navigation} postType={postsTypes.HOT} />;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={mainStyles.indicatorStyle}
      style={mainStyles.tabBarStyle}
      activeColor={color.orange}
      inactiveColor={color.orange}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

export default MainScreen;
