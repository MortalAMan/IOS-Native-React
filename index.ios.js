/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class myFirstProject extends Component {
  state = { todo: '', todos: [] };

  displayTodos = () => {
    // mapping our todos in state and returning React Native Components 
  }

  addTodo = () => {
    // add the new todo to our state
    // RENDER 
  }  

handle  
  
  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style={styles.welcome}>Todo List</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder='Add A Todo'
          autoFocus={true}
          value={this.state.todo}
          onChangeText={this.handleChange}
          onSubmitEditing={this.addTodo}
          blurOnSubmit={false}
        />
        { this.displayTodos() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myFirstProject', () => myFirstProject);

