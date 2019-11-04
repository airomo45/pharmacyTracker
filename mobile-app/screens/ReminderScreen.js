import React, { useState, useEffect } from 'react';

import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  DatePickerIOS,
  Button,
  Modal,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import CreateReminder from '../notifications/local/CreateReminder'
import { LinearGradient } from 'expo-linear-gradient';




export default function ReminderScreen(props) {
    const [test, setTest] = useState('')
    const [medName, setMedName] = useState('')
    const [notes, setNotes] = useState('')
    const [currentDate, setCurrentDate] = useState(new Date())
    const [expirationDate, setExpirationDate] = useState(new Date())
    const [dateEntered, setDateEntered] = useState(false)
    const [reminder, setReminder] = useState(false)

    const [showDatePicker, setShowDatePicker] = useState(false)

    _navigateHome =() => {
        // reminderScreenState.reminderScreenProps.navigation.navigate('home')
        props.navigation.navigate('Links')
      
      }


    _toggleDatePicker = () => {
        if(showDatePicker == false){
            setShowDatePicker(true)

        }
        if(showDatePicker == true){
            setShowDatePicker(false)

        }
    }

    _setDate = () => {
        setDateEntered(true)

    }

    _toggleReminder = () => {
        setReminder(true)

    }
    


    console.log('>>>>>>>>>>>' + medName)
    // setExpirationDate: newDate
    console.log(expirationDate)
//    console.log("testing date: " + (expirationDate.getMonth() + 1))

console.log("current date: " + (currentDate.getMonth() + 1)+'/'+currentDate.getDate() +'/' + currentDate.getFullYear() + ' time: ' + currentDate.getHours() + ':' + currentDate.getMinutes() + '.......' + currentDate.getTime() )
console.log("current date: " + (expirationDate.getMonth() + 1)+'/'+expirationDate.getDate() +'/' + expirationDate.getFullYear() + ' time: ' + expirationDate.getHours() + ':' + expirationDate.getMinutes() + '.......' + expirationDate.getTime() )

    return (
            <View>
                  <LinearGradient
                    style={styles.container}

                    colors={['#0F5F9D', '#9EE3D9']}
                    >
                        

                    <View style={{
                        // alignItems: 'right', 
                        // backgroundColor: 'red',
                        marginBottom: 50,
                        marginLeft: '-25%'
                        }}>
                        <Text style={styles.title}>
                            Expiration 
                        </Text>
                        <Text style={styles.title}>
                            Reminder 
                        </Text>
                    </View>
                    <TextInput
                        placeholder={'Enter Medicine Name'}
                        style={styles.textInput}
                        onChangeText={text => setMedName(text)}
                        value={medName}
                    />


                     <TouchableOpacity
                        style={[styles.textInput, {paddingTop: 14}]}
                        onPress={this._toggleDatePicker}

                        >
                        
                        {/* <Text style={styles.textInputText}> */}
                            {
                                dateEntered?
                                <Text>
                               {'' + (expirationDate.getMonth() + 1)+'/'+expirationDate.getDate() +'/' + expirationDate.getFullYear() + ''}
                               </Text>
                               :
                               <Text style={styles.textInputText}>
                                    Enter Expiration Date
                               </Text>
                            }
                        {/* </Text> */}
                    </TouchableOpacity>

                    <TextInput
                        placeholder={'Additional Notes'}
                        style={styles.textInput}
                        onChangeText={text => setNotes(text)}
                        value={notes}
                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={this._toggleReminder}

                        >
                        <Text style={styles.buttonText}>
                            REMIND ME
                        </Text>
                    </TouchableOpacity>
                    

        
                    {
                        showDatePicker?
                        <View style={{backgroundColor: 'rgba(0,0, 0, .5)', width: '100%', height: '100%', position: 'absolute'}}/>
                     
                        :
                        null

                    }
                    <Modal
                        
                        animationType="slide"
                        transparent={true}
                        visible={showDatePicker}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                    
                        }}>
                            <View style={{backgroundColor: '#fff', top: '70%'}}>
                                <View>
                                    <TouchableOpacity
                                        onPress={this._toggleDatePicker}
                                    >
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setExpirationDate(currentDate)
                                            _setDate();
                                            setShowDatePicker(false)

                                        } }
                                    >
                                        <Text>Confirm</Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={{
                                    // flex: 1,
                                    width: '100%',
                                    justifyContent: 'center'
                                    }}>
                                        <DatePickerIOS date={currentDate} onDateChange={setCurrentDate} />
                        
                                </View>
                            </View>
             
           
                    </Modal>

                    <CreateReminder medName={medName} expirationDate={expirationDate} additionalNotes={notes} ReminderScreenProps={props} sendReminder={reminder}/>

                </LinearGradient>
                {/* <View style={{backgroundColor: 'red', width: '100%', height: '100%'}}><Text>Test</Text></View> */}

                
        </View>
    );
    }

ReminderScreen.navigationOptions = {
    header: null,
    title: 'Reminders',
  };

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'

  },
  title:{
    fontFamily: 'Arial Hebrew',
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',


  },
  textInput:{
        marginTop:25,
        height: 48,
        width: '80%', 
        backgroundColor: '#fff',
        borderColor: '#BCE0FD',
        borderWidth: 2,
        borderRadius: 24,
        padding: 10,
        paddingLeft: 20,
        
     },
textInputText:{
    justifyContent: 'center',
    color: '#ccc'
},
buttonText:{
    fontFamily: 'Arial',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    
  },
  buttonStyle: {
    marginTop:50,
    height: 48,
    width: '80%', 
    backgroundColor:'#15649F69',
    borderColor: '#15649F69',
    // borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
});