import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'

import Search from '../Todo/Search'
import TodoList from '../Todo/List'
import AddNewItemForm from '../Todo/AddNew'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <TodoList />
                <AddNewItemForm />
                <DevTools />
            </div>
        );
    }
}

export default App;
