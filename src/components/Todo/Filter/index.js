import React from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';


@inject('store')
@observer
class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.getButtonClass = this.getButtonClass.bind(this);
    }

    getButtonClass(filter) {
        return classnames({
            'btn': true,
            'btn-outline-secondary': true,
            'w-50': filter === 'all',
            'w-100': filter !== 'all',
            'active': filter === this.props.store.filter,
        });
    }

    render() {
        return (
            <div className="btn-group btn-group-lg d-flex">
                <button
                    className={this.getButtonClass('all')}
                    onClick={this.props.store.setFilter.bind(this, 'all')}
                >
                    All
                </button>
                <button
                    className={this.getButtonClass('complete')}
                    onClick={this.props.store.setFilter.bind(this, 'complete')}
                >
                    Complete
                </button>
                <button
                    className={this.getButtonClass('incomplete')}
                    onClick={this.props.store.setFilter.bind(this, 'incomplete')}
                >
                    Incomplete
                </button>
            </div>
        )
    }
}

export default Filter
