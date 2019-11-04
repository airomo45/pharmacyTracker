import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, Platform, TouchableOpacity, Modal } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

const CreateReminder = (props) => {
  const [reminderScreenState, setreminderScreenState] = useState(props);
  const [ showReminderValidation, setShowReminderValidation] = useState(false);
  const [ navigateAway, setNavigateAway] = useState(false);

  console.log('====================')
  console.log(reminderScreenState.sendReminder)
  // console.log( reminderScreenState.ReminderScreenProps.navigation.navigate('Home') )
  



_navigateHome =() => {
  // reminderScreenState.reminderScreenProps.navigation.navigate('home')
  // props.navigation.navigate('Links')
  // setShowReminderValidation(false)
  reminderScreenState.ReminderScreenProps.navigation.navigate('Profile')
  // setNavigateAway(true)
  // setShowReminderValidation(false)

}
_hideModal = () => {
  setShowReminderValidation(false)
}

  _handleButtonPress = () => {
    const localnotification = {
      title: reminderScreenState.medName + ' is about to expire!',
      body: 'Your medicine is about to expire!',
      badge: 1,
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;
    console.log(sendAfterFiveSeconds)
    // console.log('>>>' + Math.floor(reminderScreenState.expirationDate.getTime()) )
    let scheduleReminder = reminderScreenState.expirationDate.getTime();
    // let scheduleReminder = (new Date()).getTime() + 10000
    const schedulingOptions = { time:  scheduleReminder};
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
    setShowReminderValidation(true)
  };

  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' && Platform.OS === 'ios') {
        Alert.alert(notification.title, notification.body);
      }
    });
  };


  useEffect(() => {
    // setNavigateAway(false)
    getiOSNotificationPermission();
    this.listenForNotifications();
    setreminderScreenState(props);

    // if(navigateAway == false){
    if(reminderScreenState.sendReminder == true){
      this._handleButtonPress()
    }

  // }

}
  
);

  console.log('Time: ' + Date.now())

  var date = new Date()

  var date = Math.floor(new Date().getTime()) 
   console.log('Time: ' + reminderScreenState.expirationDate.getTime())


  //  console.log("testing date: " + (reminderScreenState.expirationDate.getMonth() + 1)+'/'+reminderScreenState.expirationDate.getDate() +'/' + reminderScreenState.expirationDate.getFullYear() + ' time: ' + reminderScreenState.expirationDate.getHours() + ':' + reminderScreenState.expirationDate.getMinutes() + '.......' + reminderScreenState.expirationDate.getTime() )

  console.log(">>>>" + reminderScreenState.medName)
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this._handleButtonPress}

        >
          <Text style={styles.buttonText}>
            REMIND ME
          </Text>
        </TouchableOpacity> */}




        <Modal
            animationType="none"
            transparent={true}
            visible={showReminderValidation}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
        
            }}>
              <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, .7)', height: '100%'}}>
                <View style={styles.reminderValidate}>
                  <Text style={styles.reminderValidateTitle}>Reminder Created</Text>
                  <Text style={styles.reminderValidateText}>Your medicine, 
                  {' '}
                  <Text style={[styles.reminderValidateText], {fontWeight: 'bold'}}>
                    {reminderScreenState.medName} 
                  </Text>
                  {' '}
                  will expire on 
                  {' '}
                  <Text style={[styles.reminderValidateText], {fontWeight: 'bold'}}>
                    {(reminderScreenState.expirationDate.getMonth() + 1) + '/' + reminderScreenState.expirationDate.getDate() + '/' + reminderScreenState.expirationDate.getFullYear()} 
                  </Text>
                  {' '}
                  at 
                  {' '}
                    <Text style={[styles.reminderValidateText], {fontWeight: 'bold'}}>
                      {reminderScreenState.expirationDate.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}
                    </Text>
                  </Text>

                  <TouchableOpacity
                    style={[styles.buttonStyle, {backgroundColor: '#4A96B5'}]}
                    onPress={this._navigateHome}
                  >
                    <Text style={styles.buttonText}>
                      Continue
                    </Text>
                  </TouchableOpacity>


                </View>
              </View>



          </Modal>

      </View>
    );
  }

  export default CreateReminder;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  reminderValidate:{
    backgroundColor: '#fff',
    width: '80%',
    height: '30%',
    alignItems: 'center',
    padding: 25,
    borderRadius: 20,
    
  },
  reminderValidateTitle:{
    fontFamily: 'Arial Hebrew',
    color: '#4A96B5',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20

  },
  reminderValidateText:{
    fontFamily: 'Arial',
    color: '#4A96B5',
    fontSize: 16,
    // fontWeight: 'bold',
    marginTop: 20

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