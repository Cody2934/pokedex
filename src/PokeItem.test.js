import React from 'react';
import PokeItem from './PokeItem.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<PokeItem pokemon={[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});