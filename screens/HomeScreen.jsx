import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <SafeAreaView>
        <ToDoForm tasks={tasks} />
        <ToDoList addTask={handleAddTask} />
        <Button
          title="About"
          onPress={() => {
            navigation.navigate('About');
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
