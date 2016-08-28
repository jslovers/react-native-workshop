import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight
} from 'react-native';

export class TodoForm extends Component {
    
    onPress()
        {
            console.log("Save");
        }
    
    render() {
        return (
            <View style={Styles.form}>
                <Text style={Styles.label}>Add new note</Text>
                <TextInput style={Styles.todoInput} multiline={true}/>
                <TouchableHighlight style={Styles.button} onPress={this.onPress} underlayColor={"#8297F6"}>
                    <Text style={{color : "#fff"}}>Save</Text>
                </TouchableHighlight>
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
    button : {
        backgroundColor : "#1A4D9F",
        height : 30,
        width : 80,
        padding : 10,
        marginTop : 10,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5
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