import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App';
import TodoListStore from './components/Todo/List/store'
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/bootstrap.global.scss';
import './assets/styles/app.global.scss';


const store = new TodoListStore();

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
