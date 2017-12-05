/* eslint-env jest */

import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import App from '../pages/index.js';

describe('With Enzyme', () => {
    it('App shows "Hello world!"', () => {
        const app = shallow(<App />);

        expect(
            app
                .find('Title')
                .children()
                .text(),
        ).toEqual('Hello World!');
    });
});

describe('With Snapshot Testing', () => {
    it('App shows "Hello world!"', () => {
        const component = renderer.create(<App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
