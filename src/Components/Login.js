import React, { Component } from 'react';
import { ADD_TO_LIB, USER_INFO } from './Constant'
import './../Style/login.scss';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="container loginwrapper p-4">
                <form onSubmit={this.props.handleOnSubmit}>
                    <div className="iconWrapper">
                        <span role="img" aria-label="icon">&#128113;</span>
                    </div>
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            name="employee"
                            className="form-control input_pass"
                            placeholder="Employee"
                            autoComplete="off"
                            onChange={this.props.handleOnChange}
                            value={this.props.employee ? this.props.employee : ''}
                        />
                    </div>
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            name="designation"
                            className="form-control input_pass"
                            placeholder="Designation"
                            autoComplete="off"
                            onChange={this.props.handleOnChange}
                            value={this.props.designation ? this.props.designation : ''}
                        />
                    </div>
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            name="age"
                            className="form-control input_pass"
                            placeholder="Age"
                            autoComplete="off"
                            onChange={this.props.handleOnChange}
                            value={this.props.age ? this.props.age : ''}
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { employee, designation, age } = state.userInfo;
    return {
        employee,
        designation,
        age
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnSubmit: (event) => dispatch({ type: ADD_TO_LIB, event }),
        handleOnChange: (event) => dispatch({ type: USER_INFO, event })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)