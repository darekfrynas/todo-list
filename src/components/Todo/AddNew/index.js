import React from 'react';


class AddNew extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Feed the cat..."
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-primary">Save</button>
                </div>
            </div>
        )
    }
}

export default AddNew;
