import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import { RowItem } from './components/todo-list-row';

export class Todo extends Component {

    constructor(prop, context) {
        super(prop, context);

        var component = this;
        var todoDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            todos: todoDataSource.cloneWithRows(["Do Something", "Really Do Something"])
        };
    }

    render() {
        return ( 
            <View style={styles.container} >
                <ListView dataSource={this.state.todos} renderRow={(row)=>{ return <RowItem row={row}/> }} ></ListView> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});