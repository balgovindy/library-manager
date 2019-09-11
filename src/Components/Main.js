import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import './../Style/main.scss';
import Login from './Login';
import Library from './Library';
import Favourite from './Favourite';
export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="d-flex">
                    <div className="pr-5 pt-5 flex-shrink-1 bd-highlight leftPannel">
                        <ul>
                            <li>
                                <Link to='/'>Login</Link>
                            </li>
                            <li>
                                <Link to='/library'>Library</Link>
                            </li>
                            <li>
                                <Link to='/favourite'>Favourite</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rightPannel">
                        <Route path='/' exact component={Login}></Route>
                        <Route path='/library' component={Library}></Route>
                        <Route path='/favourite' component={Favourite}></Route>
                    </div>
                </div>
            </Fragment>
        )
    }
}
