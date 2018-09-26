import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'

import TopBar from '../Todo/TopBar'
import TodoList from '../Todo/List'
import AddNewItemForm from '../Todo/AddNew'

import './styles.scss';


class App extends Component {
    render() {
        return (
            <div className="container">
                <div styleName="app-container">
                    <h1>Boost your productivity with this simple tool</h1>
                    <hr className="mb-5" />

                    <TopBar />
                    <TodoList />
                    <AddNewItemForm />
                    <DevTools />
                </div>
            </div>
        );
    }
}

export default App;
