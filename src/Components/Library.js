import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { EPMTY_LIB } from './defaultData';
import Header from './Header';
import { HANDLE_FAV, REMOVE_FROM_LIB } from './Constant';
import './../Style/library.scss';


class Library extends Component {
    render() {
        let libraryData;
        const tempData = this.props.lib.map(lib => <Card
            handleFavourite={() => this.props.handleFavourite(lib.index, lib.text)}
            handleDelete={() => this.props.handleDelete(lib.index)}
            {...lib}
            id={`button_${lib.index}`}
            button
            key={lib.index} />
        )
        if (tempData.length > 0) {
            libraryData = tempData
        } else {
            libraryData = <Header text={EPMTY_LIB} />
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {libraryData}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lib: state.lib
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleFavourite: (index, text) => dispatch({ type: HANDLE_FAV, index, text }),
        handleDelete: (index) => dispatch({ type: REMOVE_FROM_LIB, index })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Library);
