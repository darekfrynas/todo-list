import React from 'react';

import Search from '../Search';
import Filter from '../Filter';


class TopBar extends React.Component {
    render() {
        return (
            <div className="row mb-4">
                <div className="col-7">
                   <Search />
                </div>
                <div className="col-5">
                    <Filter />
                </div>
            </div>
        )
    }
}

export default TopBar
