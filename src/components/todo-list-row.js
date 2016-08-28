import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export class RowItem extends Component {

    render() {
        return ( 
             <Text>{this.props.row}</Text>
        );
    }
}