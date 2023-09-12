// NotesScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const NotesScreen = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (title && note) {
      setNotes([...notes, { title, note }]);
      setTitle('');
      setNote('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Note:</Text>
      <TextInput
        placeholder="Enter your note"
        value={note}
        onChangeText={(text) => setNote(text)}
        multiline
      />
      <Button title="Add Note" onPress={addNote} />

      <Text>My Notes:</Text>
      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.note}</Text>
            <TouchableOpacity onPress={() => deleteNote(index)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default NotesScreen;
