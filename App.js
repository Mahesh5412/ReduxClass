
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
import { Provider } from 'react-redux';
import store from './src/Store/index';

const RootStack = createStackNavigator(
  {
    
    Home:{

        getScreen:()=>
          require('./src/components/HomeScreen').default,

          navigationOptions: {
            header: null,
          },
    

    } ,
    Details:{

      getScreen:()=>
      require('./src/components/DetailsScreen').default,

      navigationOptions: {
        header: null,
      },
      

    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    console.log("14");
    return(
    
      <Provider store={store}>
      <AppContainer />
      </Provider>
    )

  }
}