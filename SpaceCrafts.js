import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpaceCraftsScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex : 1,
                justifyContent : "center",
                alignItems : "center"
            }}>
            <Text>Space Craft Screen</Text>
            </View>
        )
    }
}