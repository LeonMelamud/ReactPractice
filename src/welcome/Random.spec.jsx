import React from 'react';
import ReactDOM from 'react-dom';
import Random from './Random';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Random/>, div);
    expect(div.innerHTML).not.toEqual('Error');
    expect(div).toBeTruthy();
});