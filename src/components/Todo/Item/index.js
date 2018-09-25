import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class Item extends Component {
    render() {
        return (
            <div className="input-group mb-1">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" checked={this.props.completed} />
                    </div>
                </div>
                <input value={this.props.value} type="text" className="form-control" />
                <div className="input-group-append">
                    <button
                        className="btn btn-danger"
                        title="Remove this task"
                        onClick={this.props.store.removeTodo.bind(this, this.props.id)}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Item;
