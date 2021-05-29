import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  StyleSheet
} from 'react-native'
import WorkShop2 from './components/Lab3/WorkShop2';
import WorkShop3 from './components/Lab3/WorkShop3';
import WS3 from './components/Lab3/WS3';
import ListComponent from './components/Lab4/ListComponent';
import VersionPage from './components/Lab4/VersionPage';
import NotificationList from './components/Lab5/NotificationList';
import Form from './components/Lab5/Form';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
    const [color,setColor] = useState('#F00');
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

  return (
      <NavigationContainer
          linking={{
              enabled: true
          }}
          navigationOptions={{
              cardStack: {
                  gesturesEnabled: false,
              }
          }}
      >
          <Stack.Navigator
              screenOptions={{
                  headerMode: 'none',
                  headerShown: false,
                  gesturesEnabled: false,
                  cardStyle: { backgroundColor: "transparent" },
                  cardOverlayEnabled: true,
                  headerLeft:  null,
                  cardStack: {
                      gesturesEnabled: false,
                  },
              }}
              mode="modal"
              // initialRouteName="tasks"
              initialRouteName="lab4"
              headerMode="none"
          >
              <Stack.Screen
                  name={'ws2'}
                  component={() => (
                      <WorkShop2/>
                  )}
              />
              <Stack.Screen
                  name={'ws3'}
                  component={() => (
                      <WorkShop3
                          setColor={setColor}
                          setCount={setCount}
                          color={color}
                          count={count}
                      />
                  )}
              />
              <Stack.Screen
                  name={'ws'}
                  component={() => (
                      <WS3
                          color={color}
                          count={count}
                      />
                  )}
              />
              <Stack.Screen
                  name={'lab4'}
                  component={() => (
                      <ListComponent/>
                  )}
              />
              <Stack.Screen
                  name={'lab4item'}
                  component={() => (
                      <VersionPage/>
                  )}
              />
              <Stack.Screen
                  name={'tasks'}
                  component={() => (
                      <NotificationList
                          tasks={tasks}
                          setTasks={setTasks}
                      />
                  )}
              />
              <Stack.Screen
                  name={'form'}
                  component={() => (
                      <Form
                          tasks={tasks}
                          setTasks={setTasks}
                      />
                  )}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
