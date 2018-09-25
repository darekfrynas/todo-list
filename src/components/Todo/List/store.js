import { observable, action } from 'mobx';

import TodoItemStore from '../Item/store'


class TodoListStore {
    @observable todos = [];

    @action.bound
    addTodo(value) {
        this.todos.push(new TodoItemStore(value));
    }
}

export default TodoListStore;
