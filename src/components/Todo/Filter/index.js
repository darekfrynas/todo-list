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
            'btn-outline-primary': true,
            'w-50': filter === 'all',
            'w-100': filter !== 'all',
            'active': filter === this.props.store.filter,
        });
    }

    render() {
        return (
            <div className="d-flex">
                <span className="mr-2 mt-auto mb-auto">Show:</span>
                <div className="btn-group d-flex w-100">
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
            </div>
        )
    }
}

export default Filter
