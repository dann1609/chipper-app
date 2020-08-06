# Chipper Test Challenge

## Setup

### React Native 

Please refer the [React Native docs Getting Started guide](https://reactnative.dev/docs/getting-started) over the **React Native CLI Quickstart** tab. There, you can see all the detailed setup processs for `Android` and `iOS` platforms.

### This Project

This project use npm but you also could use yarn.

1. Run `npm install`
2. Run `npx pod-install ios` 
3. Run `npm run ios` to run app into an ios simulator or `npm run android` to run app into android simulator. 


## Explanation

This Project use a simple layout. 
In order to handle app state. The project use redux & redux-thunk.
We assume all reddit post has an image url so no one default image will be added.
Also assume app will have always internet connection. So no one internet status checker implemented. 
