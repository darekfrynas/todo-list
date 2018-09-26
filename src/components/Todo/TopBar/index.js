import React from 'react';

import Search from '../Search';
import Filter from '../Filter';


class TopBar extends React.Component {
    render() {
        return (
            <div className="row mb-4">
                <div className="col-sm-12 col-lg-7 mb-sm-4 mb-lg-0">
                   <Search />
                </div>
                <div className="col-sm-12 col-lg-5">
                    <Filter />
                </div>
            </div>
        )
    }
}

export default TopBar
