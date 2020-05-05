import React from 'react';



export function myChildren() {
    const map = ['Liav','Hila',' baby', 'babyBoom'];
    return map;
}
export function namesNotInIndex1() {

    const mapName1 = ['Leon1', 'Lev1', 'Sergey1'];
    


    return mapName1.map((mapName1, index) => index !== 1 ? <li key={index}>{mapName1}</li>: 'Index 1 withOut Name in Map ' );
}