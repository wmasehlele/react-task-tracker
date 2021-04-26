import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
 
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color: "#000",
    text: "Add New"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button