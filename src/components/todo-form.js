import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';

export class TodoForm extends Component {
    render() {
        return (
            <View style={Styles.form}>
                <Text style={Styles.label}>Add new note</Text>
                <TextInput style={Styles.todoInput} multiline={true}/>
            </View>
        );
    }
}

var Styles = StyleSheet.create({
    form : {
        flex : 2,
        padding : 10,
        borderTopWidth : 1,
        borderColor : "#000",
        marginTop : 10
    },
    label : {
        marginBottom : 10
    },
    todoInput : {
        borderWidth : 1,
        borderRadius : 5,
        borderColor : "#ccc",
        height : 60,
        padding : 5,
        fontSize : 14
    }
})