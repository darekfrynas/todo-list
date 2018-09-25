import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Item from '../Item';


@inject('store')
@observer
class List extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.store.getTodos.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            value={item.value}
                            completed={item.completed}
                            updateValue={item.updateValue}
                            toggleCompleted={item.toggleCompleted}
                        />
                    ))
                }
            </div>
        );
    }
}

export default List;
