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
        this.startEditing = this.startEditing.bind(this);
        this.dismissEditing = this.dismissEditing.bind(this);
        this.doubleClickToggle = this.doubleClickToggle.bind(this);
        this.updateTempValue = this.updateTempValue.bind(this);
        this.renderRightSideButtons = this.renderRightSideButtons.bind(this);
        this.saveWithEnterKey = this.saveWithEnterKey.bind(this);
    }

    getInputValue() {
        if (this.state.isDisabled) {
            return this.props.value;
        }
        return this.state.tempValue;
    }

    setNewTaskValue() {
        this.props.updateValue(this.state.tempValue);
        this.toggleDisabled();
    }

    toggleDisabled() {
        this.setState(prevState => ({
            isDisabled: !prevState.isDisabled,
        }));
    }

    startEditing() {
        this.setState({
            tempValue: this.props.value,
        });
        this.toggleDisabled();
    }

    dismissEditing() {
        this.setState({
            tempValue: '',
        });
        this.toggleDisabled();
    }

    doubleClickToggle(e) {
        //allows input toggling only if it was disabled
        if (this.state.isDisabled) {
            this.startEditing();

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
                <button className="btn btn-secondary" onClick={this.setNewTaskValue} key="btn-save" title="Save changes">
                    <i className="fas fa-save"></i>
                </button>,
                <button className="btn btn-secondary" onClick={this.dismissEditing} key="btn-dismiss" title="Dismiss">
                    <i className="fas fa-undo"></i>
                </button>,
            ];
        }

        return [
            <button className="btn btn-secondary" onClick={this.startEditing} key="btn-edit" title="Edit task">
                <i class="fas fa-edit"></i>
            </button>,
            <button
                className="btn btn-secondary"
                onClick={this.props.store.removeTodo.bind(this, this.props.id)}
                key="btn-remove"
                title="Remove task"
            >
                <i className="fas fa-trash"></i>
            </button>
        ];
    }

    render() {
        const checkboxClass = classnames({
            'btn': true,
            'btn-success': this.props.completed,
            'btn-outline-secondary': !this.props.completed,
        });

        const itemClass = classnames({
            'todo-item': true,
            'completed': this.props.completed,
            'editable': !this.state.isDisabled,
        });

        return (
            <div className="input-group mb-1" styleName={itemClass}>
                <div className="input-group-prepend">
                    <button className={checkboxClass} styleName="checkbox" onClick={this.props.toggleCompleted}>
                        {
                            this.props.completed ?
                                <i className="fas fa-check"></i> :
                                <i className="far fa-circle"></i>
                        }
                    </button>
                </div>
                <div styleName="item-actions">{ this.renderRightSideButtons() } </div>
                <input
                    value={this.getInputValue()}
                    type="text"
                    className="form-control"
                    readOnly={this.state.isDisabled}
                    onChange={this.updateTempValue}
                    onDoubleClick={this.doubleClickToggle}
                    onKeyPress={this.saveWithEnterKey}
                />
            </div>
        );
    }
}

export default Item;
