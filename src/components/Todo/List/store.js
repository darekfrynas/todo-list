import { observable } from 'mobx';


class TodoListStore {
    @observable todos = [];
}

export default TodoListStore;
