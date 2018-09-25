import React, { Component } from 'react';
import { observer } from 'mobx-react';


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
            </div>
        );
    }
}

export default Item;
