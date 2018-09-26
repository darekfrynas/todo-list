import { observable, action } from 'mobx';


class TodoItemStore {
    @observable id;
    @observable value;
    @observable completed;

    constructor(value, id, completed) {
        this.value = value || '';
        this.id = id || this.randomizeId();
        this.completed = completed || false;
    }

    @action.bound
    updateValue(newValue) {
        this.value = newValue;
    }

    @action.bound
    toggleCompleted() {
        this.completed = !this.completed;
    }

    randomizeId() {
        // quick and simple id generator taken from https://gist.github.com/gordonbrander/2230317
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

export default TodoItemStore;
