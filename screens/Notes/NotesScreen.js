import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import styles from "./styleNotes";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function NotesScreen({ navigation }) {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const saveNotes = async (notes) => {
        try {
            await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (error) {
            console.error('Erro ao salvar notas:', error);
        }
    };

    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem('notes');
            if (storedNotes) {
                setNotes(JSON.parse(storedNotes));
            }
        } catch (error) {
            console.error('Erro ao carregar notas:', error);
        }
    };

    useEffect(() => {
        loadNotes();
    }, []);



    const addNote = () => {
        if (note.trim()) {
            const newNote = {
                id: Date.now().toString(),
                text: note,
                color: getRandomColor(),
                date: new Date().toLocaleString(),
            };
            const updatedNotes = [newNote, ...notes]; // Adiciona a nova nota no topo
            setNotes(updatedNotes);
            saveNotes(updatedNotes);
            setNote('');
        }
    };

    const removeNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
    };


    const startEdit = (id, text) => {
        setEditingNoteId(id);
        setEditedText(text);
    };

    const saveEdit = (id) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, text: editedText };
            }
            return note;
        });
        setNotes(updatedNotes);
        saveNotes(updatedNotes);
        setEditingNoteId(null);
        setEditedText('');
    };

    const getRandomColor = () => {
        const colors = ['#FFDDC1', '#D4F1F4', '#FFF5A0', '#C2F0C2', '#F2A1D6'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const renrItem = ({ item }) => (
        <View style={[styles.noteItem, { backgroundColor: item.color }]}>
            {editingNoteId === item.id ? (
                <>
                    <TextInput
                        value={editedText}
                        onChangeText={setEditedText}
                        style={styles.input}
                        placeholder="Editar sua nota"
                    />
                    <TouchableOpacity style={styles.btn} onPress={() => saveEdit(item.id)}>
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar</Text>
                    </TouchableOpacity>

                </>
            ) : (
                <TouchableOpacity onLongPress={() => startEdit(item.id, item.text)}>
                    <Text style={styles.noteText}>{item.text}</Text>
                    <Text style={styles.dateText}>📅 {item.date}</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => removeNote(item.id)}>
                <Text style={{ color: 'red', marginLeft: 10 }}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notas</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua nota"
                value={note}
                onChangeText={setNote}
            />
            <TouchableOpacity style={styles.button} onPress={addNote}>
                <Icon name="plus" size={30} color="#000" />
                <Text style={styles.buttonText}>Adicionar tarefa</Text>
            </TouchableOpacity>
            <FlatList
                data={notes}
                renderItem={renrItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}



export default NotesScreen;