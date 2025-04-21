import React, { useState, useEffect, use } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Platform } from "react-native";
import styles from "./styleBills";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


function BillsScreen() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [bills, setBills] = useState([]);
    const [showPicker, setShowPicker] = useState(false);

    const STORAGE_KEY = '@minhas_contas';

    useEffect(() => {
        const loadBills = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
                if (jsonValue != null) {
                    setBills(JSON.parse(jsonValue));
                }
            } catch (e) {
                console.error("Erro ao carregar contas:", e);
            }
        };

        loadBills();
    }, []);

    useEffect(() => {
        const saveBills = async () => {
            try {
                const jsonValue = JSON.stringify(bills);
                await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
            } catch (e) {
                console.error("Erro ao salvar contas:", e);
            }
        };

        saveBills();
    }, [bills]);




    const onDateChange = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            setDueDate(formattedDate);
        }
    };

    const addBill = () => {
        if (title && dueDate) {
            const newBill = { id: Date.now().toString(), title, amount, dueDate, paid: false };
            setBills([...bills, newBill]);
            setTitle(''); setAmount(''); setDueDate('');
        }
    };

    const deletBill = (id) => {
        setBills(bills.filter((bill) => bill.id !== id));
    };



    const togglePaid = (id) => {
        setBills(
            bills.map((bill) =>
                bill.id === id ? { ...bill, paid: !bill.paid } : bill
            )
        );
    };

    const sortedBills = [...bills].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const renderItem = ({ item }) => (
        <View style={styles.billItem}>
            <TouchableOpacity onPress={() => togglePaid(item.id)}>
                <Text style={[styles.billText, item.paid && styles.paidText]}>
                    {item.title} - € {item.amount || '0,00'}
                </Text>
                <Text style={styles.dateText}> Vencimento {item.dueDate}</Text>
                <Text style={[styles.billText, item.paid && styles.paidText]}>
                    {item.paid ? 'Pago' : 'Pendente'}
                </Text>
            </TouchableOpacity>
    
            
            <TouchableOpacity onPress={() => deletBill(item.id)}>
                <Text style={{ color: 'red', marginTop: 5 }}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contas a Pagar</Text>
            <TextInput
                placeholder="Título da conta"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Valor (opcional)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                style={styles.input}
            />

            <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.input}>
                <Text style={{ color: dueDate ? 'black' : 'gray' }}>
                    {dueDate ? `Vencimento: ${dueDate}` : 'Selecione a data de vencimento'}
                </Text>
            </TouchableOpacity>

            {showPicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? 'spiner' : "default"}
                    onChange={onDateChange}
                />
            )}


            <TouchableOpacity style={styles.button} onPress={addBill}>
                <Icon name="plus" size={30} color="#000" />
                <Text style={styles.buttonText}>Adicionar tarefa</Text>
            </TouchableOpacity>
            <FlatList
                data={sortedBills}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            
        </View>
    );
}

export default BillsScreen;
