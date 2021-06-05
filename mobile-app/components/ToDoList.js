import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ToDoList(props) {
    console.log('=======>')
    // console.log(props.text)
	return (
		<View style={styles.listContainer}>
			<Feather name="square" size={30} color="black" style={{ marginLeft: 15 }} />
			<Text style={styles.listItem}>{props.text}</Text>
			<Feather
				name="trash-2"
				size={30}
				color="red"
				style={{ marginLeft: 'auto' }}
				onPress={props.deleteTodo}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 1.5,
		width: '100%',
		alignItems: 'stretch',
		minHeight: 40
	},
	listItem: {
		paddingBottom: 20,
		paddingLeft: 10,
		marginTop: 6,
		borderColor: 'green',
		borderBottomWidth: 1,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'red'
	}
});