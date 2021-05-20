import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Set_Profile_Data_Action } from '..';

class FormComp extends Component {    

    state = {
        name: "",
        email: "",
        gender: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' placeholder='enter name here' value={this.state.name}
                        onChange={(event) => { this.setState({ name: event.target.value }) }} />
                    <br />

                    <label>Email</label>
                    <input type='text' placeholder='enter email here' value={this.state.email}
                        onChange={(event) => { this.setState ({ email: event.target.value }) }} />
                    <br />

                    <label>Gender</label>
                    <input type='text' placeholder='enter gender here' value={this.state.gender}
                        onChange={(event) => { this.setState ({ gender: event.target.value }) }} />
                    <br />

                    <button onClick={(event) => { 
                        event.preventDefault(); 
                        const { name, email, gender } = this.state 
                        this.props.Set_Profile_Data({name, email, gender}) 
                        this.setState({name: ',', email: '', gender: ''}) }} >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        Set_Profile_Data_Action: (value) => {
            dispatch(Set_Profile_Data_Action(value))
        }
    }
}

export default connect(null, MapDispatchToProps) (FormComp);


