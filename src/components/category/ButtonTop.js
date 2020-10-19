import React from 'react';
import PropTypes from 'prop-types';
import './ButtonTop.css'

ButtonTop.protoTypes = {
    name: PropTypes.string
}

ButtonTop.defaultProps = {
    name: "PIZZA"
}

function ButtonTop(props) {
    const {name} = props;

    return (
        <div className="button__top">
            <div className="button__top__main">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ButtonTop
