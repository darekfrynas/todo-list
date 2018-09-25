import { observable, action, computed } from 'mobx';

import TodoItemStore from '../Item/store'


/**
 * @filter {string} (all|complete|incomplete) - defines filter type for tasks list
 */
class TodoListStore {
    @observable search = '';
    @observable filter = 'all';
    @observable todos = [
        new TodoItemStore('Feed the cat'),
        new TodoItemStore('Feed the dog'),
        new TodoItemStore('Buy pasta'),
        new TodoItemStore('Order pizza'),
    ];

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

    @action.bound
    setFilter(filter) {
        console.log(filter);
        if (filter) {
            return this.filter = filter;
        }
        this.filter = 'all';
    }

    @computed
    get getTodos() {
        let filtered = this.todos;

        if (this.search !== '') {
            filtered = filtered.filter(item => item.value.toLowerCase().includes(this.search.toLowerCase()));
        }

        if (this.filter === 'complete') {
            filtered = filtered.filter(item => item.completed === true);
        }

        if (this.filter === 'incomplete') {
            filtered = filtered.filter(item => item.completed === false);
        }

        return filtered;
    }
}

export default TodoListStore;
