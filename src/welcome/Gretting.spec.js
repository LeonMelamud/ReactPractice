import React from 'react';
import ReactDOM from 'react-dom'; 
import Gretting from './Gretting';

it('renders without crashing', () => {
const div = document.createElement('div');

    ReactDOM.render(<Gretting name='Moshe'/>, div);
    expect(div.innerHTML).toEqual('<span>Good morning Moshe!</span>');
    expect(div.innerHTML).not.toEqual('Error');
    expect(div.id).toBeFalsy();
    expect(div.innerHTML).toContain('Moshe');
});