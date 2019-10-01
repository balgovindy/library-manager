import React, { Component } from 'react';
import Card from './Card';
import { EMPTY_FAV } from './defaultData';
import Header from './Header';
import Search from './Search';
import { FAV_SEARCH } from './Constant';
import { connect } from 'react-redux';

class Favourite extends Component {
    render() {
        let favouriteData;
        const tempData = this.props.fav.map(fav => (fav.visible && <Card
            {...fav}
            key={fav.index} />)
        )
        if (tempData.length > 0) {
            favouriteData = tempData
        } else {
            favouriteData = <Header text={EMPTY_FAV} />
        }
        return (
            <div className="container">
                {!!tempData.length && <Search name={FAV_SEARCH} />}
                <div
                    id={FAV_SEARCH}
                    className="row justify-content-center"
                >
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
