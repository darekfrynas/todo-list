import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import './styles.scss';


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
                <button className="btn btn-secondary" onClick={this.toggleDisabled} key="btn-dismiss">Cancel</button>
            ];
        }

        return [
            <button className="btn btn-primary" onClick={this.toggleDisabled} key="btn-edit">Edit</button>,
            <button
                className="btn btn-danger"
                onClick={this.props.store.removeTodo.bind(this, this.props.id)}
                key="btn-remove"
            >
                <i className="fas fa-times"></i>
            </button>
        ];
    }

    render() {
        const checkboxClass = classnames({
            'btn': true,
            'btn-success': this.props.completed,
            'btn-outline-secondary': !this.props.completed,
            'bg-white': !this.props.completed,
        });

        const itemClass = classnames({
            'todo-item': true,
            'completed': this.props.completed,
        });

        return (
            <div className="input-group mb-1" styleName={itemClass}>
                <div className="input-group-prepend">
                    <button className={checkboxClass} styleName="checkbox-btn" onClick={this.props.toggleCompleted}>
                        {
                            this.props.completed ?
                                <i className="fas fa-check"></i> :
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
