import React from 'react';
import { DELETE } from './defaultData';
import './../Style/card.scss';

function Card(props) {
    return (
        <div className="card m-3 col-lg-3 col-md-4 col-sm-6">
            <div className="card-body text-center">
                <h3 className="card-title">{props.employee}</h3>
                <h5 className="card-title">{props.designation}</h5>
                <p>Age:{props.age ? props.age : 'NA'}</p>
                {props.button && (
                    <div>
                        <button
                            onClick={props.handleFavourite}
                            className="cardButton cardfavourite"
                            id={props.id}
                        >
                            {props.text}
                        </button>
                        <button
                            onClick={props.handleDelete}
                            className="cardButton carddelete"
                            id={`delete_${props.id}`}
                        >
                            <span>{DELETE}</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;
