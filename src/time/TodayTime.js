import React from 'react';

export function TodayDate() {
    const today = new Date().toString();
    return (<span>{today}</span>);
}