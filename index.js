/**
 * @format
 */

import { AppRegistry } from 'react-native';
import StorybookUI from './.storybook'; // Update this line to import Storybook
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => StorybookUI); // Use Storybook as the main component
