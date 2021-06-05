import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, AsyncStorage, Button, TextInput, ScrollView, LinearGradient} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import ToDoListNew from '../components/ToDoListNew'
import { AppLoading } from 'expo';
import uuidv1 from 'uuid/v1'

export default function ToDoScreen(props) {
    const [newToDoItem, setNewToDoItem] = useState('');
    const [dataIsReady, setDataIsReady] = useState(false);


    // console.log('Ready: ' + dataIsReady)
    newToDoItemController = textValue => {
        setNewToDoItem(textValue)
    }
    loadTodos = () => {
        setDataIsReady(true)
    }
    useEffect(() => {    
        loadTodos();

      });

      addTodo = () => {
        if (newTodoItem !== '') {
            setNewToDoItem('')
        }
      };

    // console.log(newToDoItem)
	return (

        dataIsReady?
        <AppLoading/>
        :
		<View style={styles.container}>
            {/* <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}> */}
                {/* <Text style={styles.appTitle}>Minimalist Todo App</Text> */}



                <View style={styles.card}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Add an item!"
                    value={newToDoItem}
                    onChangeText={newToDoItemController}
                    placeholderTextColor={'#999'}
                    returnKeyType={'done'}
                    autoCorrect={false}

                />
                </View>
                <ScrollView>
                    <ToDoListNew textValue={'ToDoItem'}/>
                </ScrollView>
            {/* </LinearGradient> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
    },   
    card: {
        backgroundColor: '#fff',
        // flex: 1,
        width: '75%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24
    }
});

