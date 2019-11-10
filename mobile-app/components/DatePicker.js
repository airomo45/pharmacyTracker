import React from 'react';
import {Modal, StyleSheet, Text, View, DatePickerIOS, TouchableOpacity } from 'react-native';

export default function DatePicker(props) {
  return (
    <View style={styles.container}>
     <Modal
            animationType="slide"
            transparent={true}
            visible={props.showDatePicker}
      >
        <View style={{backgroundColor: '#fff', top: '70%'}}>
                    <View>
                        <TouchableOpacity
                            onPress={this._toggleShowDatePicker}
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                props.setExpirationDate(props.currentDate)
                                props.setDate()
                                props.setShowDatePicker(false)

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
                            <DatePickerIOS date={props.currentDate} onDateChange={props.setCurrentDate} />
            
                    </View>
                </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
