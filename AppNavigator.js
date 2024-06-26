    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { NavigationContainer } from '@react-navigation/native';
    import * as React from 'react';
    import {View, Text} from 'react-native';

    class Home extends React.Component {
        render() {
            return (
                <View>
                    <Text>Home Screen</Text>
                </View>
            );
        }
    }

    class Categories extends React.Component {
        render() {
            return (
                <View>
                    <Text>Category Screen</Text>
                </View>
            );
        }
    }

    class Offers extends React.Component {
        render() {
            return (
                <View>
                    <Text>Offers screen</Text>
                </View>
            );
        }
    }

    class Profile extends React.Component {
        render() {
            return (
                <View>
                    <Text>Profile screen</Text>
                </View>
            );
        }
    }

    const Tab = createBottomTabNavigator();

    class AppNavigator extends React.Component {
        render() {
            return(
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name='Home' component={Home} />
                        <Tab.Screen name='Categories' component={Categories} />
                        <Tab.Screen name='Offers' component={Offers} />
                        <Tab.Screen name='Profile' component={Profile} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
    }

    export default AppNavigator;