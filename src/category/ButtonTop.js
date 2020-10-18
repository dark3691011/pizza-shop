import React from 'react';
import PropTypes from 'prop-types';

ButtonTop.protoTypes = {
    name: PropTypes.string
}

ButtonTop.defaultProps = {
    name: "asfasd"
}

function ButtonTop(props) {
    const {name} = props;

    return (
        <div className="button__top">
            {/* {name.map(name => (
                <p> {name}</p>
            ))} */}
            {name}
        </div>
    )
}

export default ButtonTop
