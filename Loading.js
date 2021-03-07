import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Loading(){
    return <View style={styles.cpmtainer}>
        <Text style={styles.Text}>Getting the fucking weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent : "flex-end",
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: "#FDF6AA"
    },
    text: {
      fontSize: 30
    }
  });
  