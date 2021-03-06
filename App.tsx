import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { IndexScreen } from './src/screens';
import { BlogProvider } from './src/context/BlogContext';
import React from 'react';

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions: {
            title: 'Blogs',
        },
    }
);

const App = createAppContainer(navigator);

export default () => {
    return (
        <BlogProvider>
            <App />
        </BlogProvider>
    );
};
