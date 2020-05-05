import React, { useState } from 'react';

function Div(e){
    return (
        <div onMouseOver={e.onMouseOver} onMouseOut={e.onMouseOut}>
            My Div
        </div>
    );
}
export default Div;