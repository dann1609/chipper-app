import React from 'react';
import {WebView} from 'react-native-webview';

function DetailsScreen(props) {
  const {route} = props;
  const {link} = route.params;

  return <WebView source={{uri: link}} />;
}

export default DetailsScreen;
