import React from 'react';
import PropTypes from "prop-types";
export default function Gretting(props){
    return <span>Good morning {props.name}!</span>;

}
    Gretting.propTypes = {
      name: PropTypes.string.isRequired,
    };