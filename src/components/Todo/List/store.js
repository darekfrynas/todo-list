import { observable, action, computed } from 'mobx';

import TodoItemStore from '../Item/store'


class TodoListStore {
    @observable search = '';
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

    @action.bound
    setSearch(search) {
        this.search = search;
    }

    @computed
    get getTodos() {
        if (this.search !== '') {
            return this.todos.filter(item => item.value.toLowerCase().includes(this.search.toLowerCase()));

        }
        return this.todos;
    }
}

export default TodoListStore;
