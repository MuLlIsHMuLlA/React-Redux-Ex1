import React from 'react';
import {connect} from 'react-redux'

function Name(props) {
    return (
        <div>
            <h1>{props.profile.name}</h1>
            <h1></h1>
        </div>
    );
}

const MapStateToProp = (state) => {
    return {
        profile: state.profile
    }

}

export default connect(MapStateToProp) (Name);