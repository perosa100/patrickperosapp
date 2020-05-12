import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
require('react-native').unstable_enableLogBox();

AppRegistry.registerComponent(appName, () => App);
