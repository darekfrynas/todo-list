import React from 'react';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class Search extends React.Component {
    constructor(props) {
        super(props);

        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.props.store.setSearch(event.target.value)
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search through your tasks..."
                    value={this.props.store.search}
                    onChange={this.updateSearch}
                />
                {
                    !!this.props.store.search &&
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.props.store.setSearch.bind(this, '')}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Search;
