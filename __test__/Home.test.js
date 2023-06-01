//import {jest} from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import Home from "../src/components/Home";

describe('Unit testing React components', () => {

  describe('LabeledText', () => {
    let text;
    const props = {
      label: 'Mega',
      text: 'Markets',
    };

    beforeAll(() => {
      //React.render
      home = render(<Home />)

    });

    test('Renders the passed-in text with the label in bold', () => {
      expect(home.getByText("name").nextSibling).toHaveTextContent('Markets');
     // expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold')
    });
  })
})