import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {SafeAreaView, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import AboutScreen from './AboutScreen';

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
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('AboutScreen')}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
