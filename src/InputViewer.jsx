import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
function InputViewer() {
    const [text, setText] = useState('enter text to change Me : ');
    function changeHandler(e) {
    setText(e.target.value);
    
}
    return (
        <div>
            <span>{text}</span>
            <TextField onChange={changeHandler} type="text" placeholder='changeHandler'/> </div>
    ); }
export default InputViewer;