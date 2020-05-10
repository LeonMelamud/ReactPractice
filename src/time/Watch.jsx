import React from 'react';
import PropTypes from "prop-types";
function Watch(props) {
const date = new Date(props.milliseconds)
const options = { weekday: 'long', hour: 'numeric', minute:
'numeric', second: 'numeric' };

    const time = date.toLocaleDateString('he-IL', options)
    return (<span>{time}</span>
    );


}
    Watch.propTypes = {
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    };
export default Watch;