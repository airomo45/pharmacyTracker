// import React, { useState, useCallback, useEffect } from 'react';
// import { StyleSheet, TouchableOpacity, View, Text, AsyncStorage, Button, TextInput} from 'react-native';
// import { Ionicons, Feather } from '@expo/vector-icons';

// export default function TestScreen(props) {

//     const [value, setValue] = useState('');
//     const [value2, setValue2 ] = useState('')

//     // Save data to AsyncStorage


//     saveData = async () =>{
//         await AsyncStorage.setItem('user', value2);
//         setValue(value2)  
//     }
// //    


//    // Get data from AsyncStorage
//     retrieveData = async () => {
//     try {
//      const valueString = await AsyncStorage.getItem('user');
//     //  return valueString;
//      setValue(valueString)
//     //  const value = JSON.parse(valueString);
//     //  setData(value);
//     console.log(valueString)
//     } 
//     catch (error) {
//      console.log(error);
//     }
//    };

//    useEffect(() => {    
//     // AsyncStorage.clear();
//     retrieveData();
//   });

//     console.log('=======>')
//     // console.log(props.text)
// 	return (
// 		<View style={styles.container}>
//             <TextInput
//                placeholder="What do you want to do today?"
//                placeholderTextColor="#abbabb"
//                value={value2}
//                onChangeText={value2 => setValue2(value2)} 
//             />
            
//             <Button
//                 title="Save Data"
//                 onPress={saveData}
//             />
//             <Text>
//                 {value}
//             </Text>
			
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'flex-start',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// });



///============>



import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, AsyncStorage, Button, TextInput, ScrollView} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function TestScreen(props) {

    const [value, setValue] = useState('');
    const [value2, setValue2 ] = useState('')

    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])


    addToList = () => {
   
            setList1( [...list1, value2] )
            saveData();

    }
    console.log('++++++++>>>')
    console.log(list2)
    console.log('<<<++++++++')

    // Save data to AsyncStorage


    saveData = async () =>{
        await AsyncStorage.setItem('user', JSON.stringify(list1));
        setValue(value2)  
    }
//    


   // Get data from AsyncStorage
    retrieveData = async () => {
    try {
     const valueString = await AsyncStorage.getItem('user');
        console.log('++++++>>>')
        console.log(valueString)
        const testList = JSON.parse(valueString)
        console.log(testList)
    //  return valueString;
     setList2(testList)
    //  const value = JSON.parse(valueString);
    //  setData(value);
    console.log(list2)
    } 
    catch (error) {
     console.log(error);
    }
   };

   useEffect(() => {    
    // AsyncStorage.clear();
    // retrieveData();
  });

    console.log('=======>')
    // console.log(props.text)
	return (
		<View style={styles.container}>
            <TextInput
               placeholder="What do you want to do today?"
               placeholderTextColor="#abbabb"
               value={value2}
               onChangeText={value2 => setValue2(value2)} 
            />
            
            <Button
                title="Save Data"
                // onPress={saveData}
                onPress={addToList}
            />
            <Text>
                {value}
            </Text>

            <ScrollView style={{ width: '100%' }}>
                {list2.map(item => (
            <View>
                    <Text>
                        {item}
                    </Text>
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
});

