import React, { useState } from 'react';
import Watch from './Watch.jsx';

function TodayTime() {
const [today, setToday] = useState(Date.now());
function upTime() { setToday(Date.now());
}
setInterval(upTime, 1000);
    return (
        <div>
            Current Time :<Watch milliseconds={today} />
        </div>
    );}
export default TodayTime;