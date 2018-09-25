import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Item from '../Item';


@observer
class List extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.store.todos.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            value={item.value}
                            completed={item.completed}
                            updateValue={item.updateValue}
                        />
                    ))
                }
            </div>
        );
    }
}

export default List;