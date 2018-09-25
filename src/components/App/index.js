import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'

import TopBar from '../Todo/TopBar'
import TodoList from '../Todo/List'
import AddNewItemForm from '../Todo/AddNew'


class App extends Component {
    render() {
        return (
            <div className="container">
                <TopBar />
                <TodoList />
                <AddNewItemForm />
                <DevTools />
            </div>
        );
    }
}

export default App;
