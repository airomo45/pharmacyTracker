
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useCallback, useEffect } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  AsyncStorage,
} from 'react-native';

import { Ionicons, Feather } from '@expo/vector-icons';



import { MonoText } from '../components/StyledText';
import CreateReminder from '../notifications/local/CreateReminder'
// import { StackNavigator } from 'react-navigation';

import useForceUpdate from 'use-force-update';

import ToDoList from '../components/ToDoList';

export default function HomeScreen(props) {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [array1, setArray1] = useState([]);

	addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');  
      storeData();
		}
	};
  const product = { 'date' : '10/02/2018' , 'currencyRate':'300' , 'description': 'White T-shirt' }

  var myArray = ['one','two','three', 'four'];

  console.log(todos)
  console.log(todos.length)
  // console.log(todos[1].text)

  // console.log(props)
  // console.log('test ' )

  const forceUpdate = useForceUpdate();

  testFunction = () => {
      alert('I will re-render now.');
      forceUpdate();

    
  }
  storeData = async () => {
    try {
      // var listItem = await AsyncStorage.setItem(key, JSON.stringify(item))
      // return listItem
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(todos))
      // await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(myArray));
    } catch (e) {
      // saving error
      console.log('!!!ERRRORRRR!!! >>>> ' + e)
    }
  }

  getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('@@MySuperStore:key')
      const value = await AsyncStorage.getItem('@storage_Key')
      const loadedTodoList = JSON.parse(value)
      setTodos(loadedTodoList);

      if(value !== null) {
        // value previously stored
        console.log("++++++++++++++++++++++++>>>>>>>>>")
        console.log(JSON.parse(value))
        console.log('Size: ' + JSON.parse(value).length)
        // console.log(JSON.parse(value)[2])
        // setArray1(JSON.parse(value))
        // console.log(JSON.parse(value))
      }
    } catch(e) {
      // error reading value
      console.log(e)
    }
  }

  getData2 = async () =>{
   await AsyncStorage.getItem(
      '@storage_key'
    ).then( getTodos => {
      console.log('====>>>>>>>> ssss ')
      // console.log(getTodos)
      console.log(JSON.parse(getTodos))

      // setTodos(getTodos)
    })
  }



  useEffect(() => {

    const value = AsyncStorage.getItem('@storage_Key')
    console.log()
    console.log(value)

    // AsyncStorage.getItem(
    //   '@storage_key'
    // ).then( getTodos => {
    //   console.log('====>>>>>>>> ')
    //   console.log(getTodos)
    //   // setTodos(getTodos)
    // })
    // storeData();
    // getData();
    // console.log('Test')


 
    // AsyncStorage.getItem('myKey').then(value) => {
      
    // }

  })

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Todo List</Text>
    <View style={styles.textInputContainer}>
      <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={value => setValue(value)}
      />
				<TouchableOpacity onPress={() => addTodo()}>
          <Feather name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
	      </TouchableOpacity>
    </View>
    <Button
      title="test"
      // onPress={getData}
      onPress={getData2}

    />
    <ScrollView style={{ width: '100%' }}>
			{todos.map(item => (
        <View>
				<ToDoList text={item.text} key={item.key} />
        </View>

			))}
		</ScrollView>
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
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});
