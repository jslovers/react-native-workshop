import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

import { RowItem } from './components/todo-list-row';
import { TodoForm } from './components/todo-form';




export class Todo extends Component {

    constructor(prop, context) {
        super(prop, context);

        var component = this;
        this.todoDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            todos: this.todoDataSource.cloneWithRows(["Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something","Do Something", "Really Do Something"])
        };
    }

    render() {
        return ( 
            <View style={styles.container} >
                <ListView style={styles.list}
                  dataSource={this.state.todos} 
                  renderRow={(row)=>{ return <RowItem row={row}/>}}
                  renderSeparator={()=>{ return <View style={{ borderBottomWidth : 1, borderColor : "#ccc" }}></View> }}
                ></ListView>
                <TodoForm></TodoForm>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list : {
       flex : 8
    }
});