import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';


@inject('store')
@observer
class Item extends Component {
    render() {
        const checkboxClass = classnames({
            'btn': true,
            'btn-success': this.props.completed,
            'btn-secondary': !this.props.completed,
        });

        return (
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <button
                        className={checkboxClass}
                        onClick={this.props.toggleCompleted}
                    >
                        {
                            this.props.completed ?
                                <i className="far fa-check-square"></i> :
                                <i className="far fa-square"></i>
                        }
                    </button>
                </div>
                <input value={this.props.value} type="text" className="form-control" />
                <div className="input-group-append">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                    />
                    <div class="dropdown-menu">
                        <button
                            class="btn dropdown-item text-danger"
                            onClick={this.props.store.removeTodo.bind(this, this.props.id)}
                        >
                            Remove this task
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
