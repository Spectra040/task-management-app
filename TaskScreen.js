import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleTaskInputSubmit = () => {
    // This function is called when the "Enter" key is pressed
    addTask();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.taskInput}
          placeholder="Enter your task"
          value={task}
          onChangeText={(text) => setTask(text)}
          onSubmitEditing={handleTaskInputSubmit} // Call addTask() when "Enter" is pressed
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Task"
          onPress={addTask}
          style={styles.addButton}
        />
      </View>

      <Text style={styles.subheader}>Tasks:</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeTask(index)}>
            <Text style={styles.taskItem}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center', // Center vertically
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center horizontally
  },
  taskInput: {
    flex: 1,
    width: '50%', // Reduce the width to make it smaller
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10, // Add margin to the right of the input box
  },
  buttonContainer: {
    alignItems: 'center', // Center horizontally
    marginTop: 10, // Add space at the top of the button
  },
  addButton: {
    width: '60%', // Change the width of the button to 60%
    borderRadius: 4, // Add 4px border radius
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
});

export default TaskScreen;
