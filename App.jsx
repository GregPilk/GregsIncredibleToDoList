/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };
  return (
    <SafeAreaView>
      <ToDoForm tasks={tasks} />
      <ToDoList addTask={handleAddTask} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
export default App;
