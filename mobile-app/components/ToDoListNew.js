import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ToDoListNew(props) {
	const [isEditing, setIsEditing] = useState('');
	const [isCompleted, setIsCompleted] = useState(false);
	const [todoValue, setTodoValue] = useState(false);


	toggleItem = () => {
		if (isCompleted == false){
			setIsCompleted(true)
		}
		else{
			setIsCompleted(false)
		}

	}

	startEditing = () => {
		
		// const  textValue  = props.textValue
		setIsEditing(true)
		setTodoValue(props.textValue)

	}
	
	finishEditing = () => {
		setIsEditing(false)
	}

	controlInput = textValue => {
		setTodoValue(textValue)
	  };

	console.log(isCompleted)


    console.log('=======>')
    console.log(props)
	return (
		<View style={styles.container}>
        <View style={styles.rowContainer}>
        <TouchableOpacity onPress={this.toggleItem}>
        <View style={[styles.circle, isCompleted ? styles.completeCircle : styles.incompleteCircle]}>

        </View>
      </TouchableOpacity>
		{
			isEditing ? (
				<TextInput
				value={todoValue}
				style={[
					styles.text,
					styles.input,
					isCompleted ? styles.strikeText : styles.unstrikeText
				]}
				multiline={true}
				returnKeyType={'done'}
				onBlur={finishEditing}
				onChangeText={controlInput}
				/>
			) : (
				<Text
				style={[
					styles.text,
					isCompleted ? styles.strikeText : styles.unstrikeText
				]}
				>
				{props.textValue}
				</Text>
			)
		}
        </View>
        {isEditing ? (
          <View style={[styles.buttons, {marginLeft: 10}]}>
          <TouchableOpacity onPressOut={finishEditing}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>✅</Text>
            </View>
          </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttons}>
          <TouchableOpacity onPressOut={startEditing}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>✏</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>❌</Text>
            </View>
          </TouchableOpacity>
          </View>
        )}
      </View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderBottomColor: '#bbb',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'space-between'

	  },
	  text: {
		fontWeight: '500',
		fontSize: 18,
		marginVertical: 20
	  },
	  circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		// remove borderColor property from here
		borderWidth: 3,
		marginRight: 20
	  },
	  completeCircle: {
		borderColor: '#bbb'
	  },
	  incompleteCircle: {
		borderColor: '#DA4453'
	  },
	  strikeText: {
		color: '#bbb',
		textDecorationLine: 'line-through'
	  },
	  unstrikeText: {
		color: "#29323c"
	  },
	  rowContainer: {
		flexDirection: 'row',
		width: '70%',
		alignItems: 'center',
		justifyContent: 'space-between'
	  },
	  buttons: {
		flexDirection: 'row',
	  },
	  buttonContainer: {
		marginVertical: 10,
		marginHorizontal: 10,
	  }
});