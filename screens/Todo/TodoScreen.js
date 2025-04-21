import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styleTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TodoScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const STORAGE_KEY = '@minhas_tarefas';

  // Carrega as tarefas salvas ao abrir a tela
  useEffect(() => {
    const loadTasksFromStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue !== null) {
          setTasks(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Erro ao carregar tarefas:', e);
      }
    };

    loadTasksFromStorage();
  }, []);

  // Salva as tarefas toda vez que a lista for alterada
  useEffect(() => {
    const saveTasksToStorage = async () => {
      try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      } catch (e) {
        console.error('Erro ao salvar tarefas:', e);
      }
    };

    saveTasksToStorage();
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: task,
          completed: false,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, text: editedText } : item
      )
    );
    setEditingTaskId(null);
    setEditedText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      {editingTaskId === item.id ? (
        <>
          <TextInput
            value={editedText}
            onChangeText={setEditedText}
            style={styles.input}
            placeholder="Editar tarefa"
          />
          <TouchableOpacity style={styles.btn} onPress={() => saveEdit(item.id)}>
            <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => toggleComplete(item.id)}
          onLongPress={() => {
            setEditingTaskId(item.id);
            setEditedText(item.text);
          }}
        >
          <Text
            style={[
              styles.taskText,
              item.completed && {
                textDecorationLine: 'line-through',
                color: 'gray',
              },
            ]}
          >
            {item.text}
          </Text>
          <Text style={styles.dateText}>📅 {item.date}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={{ color: 'red', marginLeft: 10 }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Icon name="plus" size={30} color="#000" />
        <Text style={styles.buttonText}>Adicionar tarefa</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

export default TodoScreen;