import { shallow } from 'enzyme';
import * as React from 'react';
import { ApplicationRouter } from "./Router";

const setup = () => {
    return shallow(<ApplicationRouter />)
};

describe('AppRouter component', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).not.toBe(null)
    });
});
