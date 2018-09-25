import React from 'react';


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
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Feed the cat..."
                    value={this.state.value}
                    onChange={this.updateValue}
                    onKeyPress={this.saveWithEnterKey}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        onClick={this.saveNewTodo}
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

export default AddNew;
