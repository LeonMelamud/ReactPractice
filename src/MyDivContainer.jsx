import React, { useState } from 'react';
import Div from './Div';
function MyDivContainer() {
    const [activeText, setactiveText] = useState('');
    

    function mouseOver(e) {
        
        setactiveText('active');
    }
    
        function mouseOut(e){
         setactiveText('');
    }   

    return (
        <div>
        <Div onMouseOver={mouseOver} onMouseOut={mouseOut}>      
        </Div >
        {activeText}
    </div>
    );

}

export default MyDivContainer;