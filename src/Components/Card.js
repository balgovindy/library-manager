import React from 'react';
import './../Style/card.scss';

function Card(props) {
    return (
        <div className="card m-3 col-lg-3 col-md-4 col-sm-6">
            <div className="card-body text-center">
                <h3 className="card-title">{props.employee}</h3>
                <h5 className="card-title">{props.designation}</h5>
                <p>Age:{props.age ? props.age : 'NA'}</p>
                {props.button && <button onClick={props.handleFavourite}className="cardButton" id={props.id}>{props.text}</button>}
            </div>
        </div>
    )
}

export default Card;
