import { observable, action } from 'mobx';


class TodoItemStore {
    @observable id;
    @observable value;
    @observable completed;

    constructor(value) {
        this.id = this.randomizeId();
        this.value = value;
        this.completed = false;
    }

    @action.bound
    updateValue(newValue) {
        this.value = newValue;
    }

    randomizeId() {
        // quick and simple id generator taken from https://gist.github.com/gordonbrander/2230317
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

export default TodoItemStore;
