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
    addTodo(value, id, completed) {
        this.todos.push(new TodoItemStore(value, id, completed));
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

    recoverStoreFromObject = (data) => {

        // recover primitive types from object
        const acceptablePrimitives = ['string', 'number', 'boolean'];
        Object.keys(data).forEach(key => {
            if (acceptablePrimitives.indexOf(typeof data[key] > -1)) {
                if (typeof this[key] === typeof data[key]) {
                    this[key] = data[key];
                }
            }
        });

        if (data.todos.length) {
            this.todos = [];
            data.todos.forEach(task => {
                this.addTodo(task.value, task.id, task.completed)
            });
        }
    }
}

export default TodoListStore;
