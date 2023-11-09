import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TodoCard from './Todo.Card';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    const handleInputTodos = () => {
        if (!title) {
            alert("Please select a valid Todo");
            return ;
        }
        if (title.trim() !== '') {
            const newTodo = {
                title,
                id: Math.random() * 1000000,
                completed: false,
            };
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            setTitle('');
        }
    };

    const handleDeleteTodos = (id) => {
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleTodos = (id) => {
        console.log("checking");
        const updatedTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodos(updatedTodos);
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add a new todo..."
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={handleInputTodos}>
                        <Text style={styles.buttonText}>Add Todo</Text>
                    </TouchableOpacity>
                    {todos.map((item) => (
                        <TodoCard key={item.id} {...item} hanldeToggle={handleToggleTodos} hanldetDelete={handleDeleteTodos} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        width : '100%',
    },
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Todo;
