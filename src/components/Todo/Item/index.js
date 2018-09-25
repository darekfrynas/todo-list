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
        this.updateTempValue = this.updateTempValue.bind(this);
        this.renderRightSideButtons = this.renderRightSideButtons.bind(this);
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

    updateTempValue(event) {
        this.setState({
            tempValue: event.target.value,
        });
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
                    disabled={this.state.isDisabled}
                    onChange={this.updateTempValue}
                />
                <div className="input-group-append">{ this.renderRightSideButtons() } </div>
            </div>
        );
    }
}

export default Item;
