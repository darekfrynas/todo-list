import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';


@inject('store')
@observer
class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tempValue: '',
            isDisabled: true,
        };

        this.getInputValue = this.getInputValue.bind(this);
        this.setNewTaskValue = this.setNewTaskValue.bind(this);
        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.doubleClickToggle = this.doubleClickToggle.bind(this);
        this.updateTempValue = this.updateTempValue.bind(this);
        this.renderRightSideButtons = this.renderRightSideButtons.bind(this);
        this.saveWithEnterKey = this.saveWithEnterKey.bind(this);
    }

    getInputValue() {
        return this.state.tempValue || this.props.value;
    }

    setNewTaskValue() {
        this.props.updateValue(this.state.tempValue);
        this.toggleDisabled();
    }

    toggleDisabled() {
        this.setState(prevState => ({
            tempValue: '',
            isDisabled: !prevState.isDisabled,
        }));
    }

    doubleClickToggle(e) {
        //allows input toggling only if it was disabled
        if (this.state.isDisabled) {
            this.toggleDisabled();

            //make sure that caret goes to the end of input, instead of selecting contents
            const temp_value = e.target.value;
            e.target.value = '';
            e.target.value = temp_value;
        }
    }

    updateTempValue(event) {
        this.setState({
            tempValue: event.target.value,
        });
    }

    saveWithEnterKey(event) {
        if (event.which === 13) {
            this.setNewTaskValue();
        }
    }

    renderRightSideButtons() {
        if (!this.state.isDisabled) {
            return [
                <button className="btn btn-success" onClick={this.setNewTaskValue} key="btn-save">Save</button>,
                <button className="btn btn-danger" onClick={this.toggleDisabled} key="btn-dismiss">Dismiss</button>
            ];
        }

        return [
            <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" key="btn-dropdown"/>,
            <div className="dropdown-menu" key="dropdown">
                <button className="btn dropdown-item" onClick={this.toggleDisabled}>Edit</button>
                <div role="separator" className="dropdown-divider"></div>
                <button
                    className="btn dropdown-item text-danger"
                    onClick={this.props.store.removeTodo.bind(this, this.props.id)}
                >
                    Remove this task
                </button>
            </div>
        ];
    }

    render() {
        const checkboxClass = classnames({
            'btn': true,
            'btn-success': this.props.completed,
            'btn-secondary': !this.props.completed,
        });

        return (
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <button className={checkboxClass} onClick={this.props.toggleCompleted}>
                        {
                            this.props.completed ?
                                <i className="far fa-check-square"></i> :
                                <i className="far fa-square"></i>
                        }
                    </button>
                </div>
                <input
                    value={this.getInputValue()}
                    type="text"
                    className="form-control"
                    readOnly={this.state.isDisabled}
                    onChange={this.updateTempValue}
                    onDoubleClick={this.doubleClickToggle}
                    onKeyPress={this.saveWithEnterKey}
                />
                <div className="input-group-append">{ this.renderRightSideButtons() } </div>
            </div>
        );
    }
}

export default Item;
