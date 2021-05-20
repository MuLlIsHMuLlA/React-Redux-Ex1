import React from 'react';
import {connect} from 'react-redux';

function NewNameComp(props) {
    return (
        <div>
            <h1>{props.profile.age}</h1>
            <h1>{props.profile.email}</h1>
        </div>
    );
}

const MapStateToProp = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(MapStateToProp) (NewNameComp);