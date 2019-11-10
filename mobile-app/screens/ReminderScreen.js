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

import DatePicker from '../components/DatePicker'




export default function ReminderScreen(props) {
    const [test, setTest] = useState('')
    const [medName, setMedName] = useState('')
    const [notes, setNotes] = useState('')
    const [currentDate, setCurrentDate] = useState(new Date())
    const [expirationDate, setExpirationDate] = useState(new Date())

    const [dateEntered, setDateEntered] = useState(false)
    const [reminder, setReminder] = useState(false)

    const dateRightNow = new Date()



    const [showDatePicker, setShowDatePicker] = useState(false)

    const [isError, setError] = useState(false)

    // ERROR HANDLING:
    const [isMedicineEmpty, setIsMedicineEmpty] = useState(false)
    const [isExpirationDateError, setExpirationDateError] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)



    const nameErrorString = '* Please enter the medicine name'
    const dateErrorString = '* Please choose a later date'





    _navigateHome =() => {
        // reminderScreenState.reminderScreenProps.navigation.navigate('home')
        props.navigation.navigate('Links')
      
      }


    _setDate = () => {
        setDateEntered(true)

    }

    _toggleReminder = () => {
        setReminder(true)

    }
    

    // New component based datepicker
    _toggleShowDatePicker = () => {
        if(showDatePicker == false){
            setShowDatePicker(true)
        }
        else{
            setShowDatePicker(false)
        }
    }

    _showErrorMessage = () => {
        setShowErrorMessage(true)
    }

    

    
    useEffect(() => {
        if(medName == ''){
            setIsMedicineEmpty(true)
        }
        else{
            setIsMedicineEmpty(false)
        }
    
        if(dateRightNow.getTime() >= currentDate.getTime()){
            setExpirationDateError(true)
        }
        else{
            setExpirationDateError(false)
        }

        if (isExpirationDateError == true || isMedicineEmpty == true){
            setError(true)
        }
        else{
            setError(false)
        }
    
    });
    


    // console.log('>>>>>>>>>>>' + medName)
    // // setExpirationDate: newDate
    // console.log(expirationDate)
//    console.log("testing date: " + (expirationDate.getMonth() + 1))

// ==========================
//  Test error handling
// ===========================
console.log('>>>>>')
console.log('medicine error: ' + isMedicineEmpty)
console.log('date error: ' + isExpirationDateError)


// ==========================
//  Test date comparison
// ===========================
// console.log('Set Date: ' + dateEntered)
// console.log('-------------------------------------')
// console.log('Test date: ' )
// console.log('current date = ' + dateRightNow)
// console.log('---------------------------------------------------')
// console.log('Selected date = ' + currentDate)
// console.log(" ")
// console.log(dateRightNow.getTime() < currentDate.getTime())
// console.log('-------------------------------------')

// ==========================
//  Test date
// ===========================
// console.log("current date: " + (currentDate.getMonth() + 1)+'/'+currentDate.getDate() +'/' + currentDate.getFullYear() + ' time: ' + currentDate.getHours() + ':' + currentDate.getMinutes() + '.......' + currentDate.getTime() )
// console.log("current date: " + (expirationDate.getMonth() + 1)+'/'+expirationDate.getDate() +'/' + expirationDate.getFullYear() + ' time: ' + expirationDate.getHours() + ':' + expirationDate.getMinutes() + '.......' + expirationDate.getTime() )

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
                      
                        placeholder={
                            (isMedicineEmpty && showErrorMessage)?
                            nameErrorString
                            :
                            'Enter Medicine Name'
                        }
                        placeholderTextColor={
                            (isMedicineEmpty && showErrorMessage)?
                            'red'
                            :
                            null
                        }
                        style={
                            (isMedicineEmpty && showErrorMessage)?
                            [styles.textInput, styles.errorInput]
                            :
                            styles.textInput
                        }
                        onChangeText={text => setMedName(text)}
                        value={medName}
                    />
               
                     <TouchableOpacity
                        style={
                            (isMedicineEmpty && showErrorMessage)?
                            [styles.textInput, styles.errorInput, {paddingTop: 14}]
                            :
                            [styles.textInput, {paddingTop: 14}]
                        }
                        onPress={this._toggleShowDatePicker}

                        >
                            {
                                dateEntered?
                                <Text>
                                    {
                                        (isMedicineEmpty && showErrorMessage)?
                                        <Text style={{color: 'red'}}>
                                        { 
                                           '' + (expirationDate.getMonth() + 1)+'/'+expirationDate.getDate() +'/' + expirationDate.getFullYear() + ''
                                           + 
                                           ' '
                                           +
                                           dateErrorString
                                        }
                                        </Text>
                                        :
                                        '' + (expirationDate.getMonth() + 1)+'/'+expirationDate.getDate() +'/' + expirationDate.getFullYear() + ''
                                    
                                    }
                               </Text>
                               :
                               (
                                    (isMedicineEmpty && showErrorMessage)?

                                    <Text style={
                                            [styles.textInputText, {color: 'red'}]
                                        }>
                                            {
                                                dateErrorString
                                            }
                                    </Text>
                                    :
                                    <Text style={styles.textInputText}>
                                        Enter Expiration Date
                                    </Text>

                               )
                            }
                    </TouchableOpacity>
               

                    <TextInput
                        placeholder={'Additional Notes'}
                        style={styles.textInput}
                        onChangeText={text => setNotes(text)}
                        value={notes}
                    />


                  

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={
                            isError ?
                            this._showErrorMessage
                            :
                            this._toggleReminder
                        }

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

                    <DatePicker 
                        showDatePicker={showDatePicker} 
                        currentDate={currentDate} 
                        setCurrentDate={setCurrentDate}
                        toggleDatePicker={_toggleShowDatePicker} 
                        setDate={_setDate}
                        setExpirationDate={setExpirationDate}
                        setShowDatePicker={setShowDatePicker} 
                    />
            

                    <CreateReminder medName={medName} expirationDate={expirationDate} additionalNotes={notes} ReminderScreenProps={props} sendReminder={reminder}/>



                </LinearGradient>

                
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
    // fontFamily: 'Arial Hebrew',
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
    // fontFamily: 'Arial',
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
  errorInput: {
    borderColor: '#FA8080',
    borderWidth: 1
  },
  
});