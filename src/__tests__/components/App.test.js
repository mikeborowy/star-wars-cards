import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import App from '../../components/App';
import Stage from '../../components/stage/Stage';

let component;

beforeEach( () => {
    component = shallow(<App />);
});
describe('test App component', () => {
  it('shows Stage', () => {
    expect(component.find(Stage).length).toEqual(1);
  });
});
