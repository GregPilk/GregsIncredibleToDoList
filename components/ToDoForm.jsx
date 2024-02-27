import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

function ToDoForm() {
  const [tasks, setTasks] = React.useState(['']);
  const handleChangeText = text => {
    setTasks(text);
  };
  const handlePress = () => {
    addTask();
  };
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          placeholder="Add a new task..."
          value={text}
        />
        <Button title="Add" onPress={handlePress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoForm;
