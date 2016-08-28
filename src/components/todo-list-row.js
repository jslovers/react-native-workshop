import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export class RowItem extends Component {

    onPress()
        {
            console.log("dasdadasd");
        }
        
    render() {
        return (
                <TouchableHighlight onPress={this.onPress} underlayColor={"#ccc"}>
                    <Text style={Styles.todo}>{this.props.row}</Text>
                </TouchableHighlight>
        );
    }
}

var Styles = StyleSheet.create({
    todo : {
        fontSize : 16,
        padding : 10
    }
})