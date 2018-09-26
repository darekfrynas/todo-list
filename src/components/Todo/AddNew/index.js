import React from 'react';
import { inject } from 'mobx-react';


@inject('store')
class AddNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };

        this.updateValue = this.updateValue.bind(this);
        this.saveNewTodo = this.saveNewTodo.bind(this);
        this.saveWithEnterKey = this.saveWithEnterKey.bind(this);
    }

    updateValue(event) {
        this.setState({ value: event.target.value });
    }

    saveNewTodo() {
        this.props.store.addTodo(this.state.value);
        this.setState({ value: '' })
    }

    saveWithEnterKey(event) {
        if (event.which === 13) {
            this.saveNewTodo();
        }
    }

    render() {
        return (
            <div className="input-group mt-4">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-keyboard"></i></span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type in new task..."
                    value={this.state.value}
                    onChange={this.updateValue}
                    onKeyPress={this.saveWithEnterKey}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-success"
                        onClick={this.saveNewTodo}
                    >
                        Add new task
                    </button>
                </div>
            </div>
        )
    }
}

export default AddNew;
