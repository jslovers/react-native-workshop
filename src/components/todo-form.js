import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ListView
} from 'react-native';

export class TodoForm extends Component {
    
    constructor(prop, context)
        {
            super(prop, context);
            this.state = {};
            this.state.note = "";
        }

    saveForm()
        {
            if(this.state.note && this.state.note !== "")
                {
                    this.props.saveform(this.state.note);
                }
            
        }
    
    render() {
        return (
            <View style={Styles.form}>
                <Text style={Styles.label}>Add new note</Text>
                <TextInput onChangeText={(note) => this.setState({note})} style={Styles.todoInput} multiline={true}/>
                <TouchableHighlight style={Styles.button} onPress={this.saveForm.bind(this)} underlayColor={"#8297F6"}>
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
        fontSize : 12
    }
})