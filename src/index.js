import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import storeAutoSave from './autoSave';
import faInit from './fontAwesomeInitialize';
import App from './components/App';
import TodoListStore from './components/Todo/List/store'
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/bootstrap.global.scss';
import './assets/styles/app.global.scss';


faInit();
const store = new TodoListStore();
storeAutoSave(store);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
