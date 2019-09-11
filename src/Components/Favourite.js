import React, { Component } from 'react';
import Card from './Card';
import { EMPTY_FAV } from './defaultData';
import Header from './Header';
import { connect } from 'react-redux';

class Favourite extends Component {
    render() {
        let favouriteData;
        const tempData = this.props.fav.map(lib => <Card
            {...lib}
            key={lib.index} />
        )
        if (tempData.length > 0) {
            favouriteData = tempData
        } else {
            favouriteData = <Header text={EMPTY_FAV} />
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    {favouriteData}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        fav: state.fav
    }
}
export default connect(mapStateToProps, null)(Favourite);
