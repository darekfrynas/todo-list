import { observable, action } from 'mobx';

import TodoItemStore from '../Item/store'


class TodoListStore {
    @observable todos = [];

    @action.bound
    addTodo(value) {
        this.todos.push(new TodoItemStore(value));
    }

    @action.bound
    removeTodo(id) {
        const newTodos = this.todos.filter(todo => todo.id !== id);
        this.todos.replace(newTodos);
    }
}

export default TodoListStore;
