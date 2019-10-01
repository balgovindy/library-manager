import React from 'react';
import { connect } from 'react-redux';


function Search(props) {
    return (
        <div>
            <input
                id="searchBox"
                onChange={(e) => props.handleOnChange(e, props.name)}
                name={props.name}
                className="form-control mt-3"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange: (event, type) => dispatch({ type, event })
    }
}
export default connect(null, mapDispatchToProps)(Search);
