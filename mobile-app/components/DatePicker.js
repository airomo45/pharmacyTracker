import React, { useState, useEffect } from 'react';
import { Text, DatePickerIOS, View, StyleSheet, Button, Alert, Platform, TouchableOpacity, Modal } from 'react-native';



const DatePicker = (props) => {
    const [datePickerState, setDatePickerState] = useState(props);

    console.log('==========================')
    console.log('Showing datePicker props: ')
    console.log(datePickerState)
    console.log(datePickerState.showComponent)
    return (
     <View>
         {/* <Text>
            {datePickerState.showComponent?
            'test'
            :
            null
            }
        </Text> */}
         
 
                <Modal
                        
                        animationType="slide"
                        transparent={true}
                        visible={props.showDatePicker}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                    
                        }}>
                            <View style={{backgroundColor: '#fff', top: '70%'}}>
                                {/* <View>
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
                                </View> */}


                                {/* <View style={{
                                    // flex: 1,
                                    width: '100%',
                                    justifyContent: 'center'
                                    }}>
                                        <DatePickerIOS date={currentDate} onDateChange={setCurrentDate} />
                        
                                </View> */}
                            </View>
             
           
                    </Modal>
      </View>
    );
  }

  export default DatePicker;


const styles = StyleSheet.create({

});