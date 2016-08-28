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
        this.todos = ["Do something"];
        this.todoDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            todos: this.todoDataSource.cloneWithRows(this.todos)
        };

        TodoForm.propTypes = {
            saveform: React.PropTypes.func
        };
    }

    saveNewNote(note)
      {
          console.log(this);

          this.todos.push(note);
          this.setState({
              todos : this.todoDataSource.cloneWithRows(this.todos)
          })
      }

    

    render() {
        var index = 0;
        return ( 
            <View style={styles.container} >
                <ListView style={styles.list}
                  dataSource={this.state.todos} 
                  renderRow={(row)=>{ return <RowItem key={index++} row={row}/>}}
                  renderSeparator={(row)=>{ return <View key={index++} style={{ borderBottomWidth : 1, borderColor : "#8297F6" }}></View> }}
                ></ListView>
                <TodoForm saveform={this.saveNewNote.bind(this)}></TodoForm>
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