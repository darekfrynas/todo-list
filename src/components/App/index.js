import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TodoList from '../Todo/List'
import TodoListStore from '../Todo/List/store'


const store = new TodoListStore();

@observer
class App extends Component {
    render() {
        return (
            <div className="container">
                <TodoList store={store} />
            </div>
        );
    }
}

export default App;
