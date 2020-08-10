import {shallow} from 'enzyme';
import * as React from 'react';
import { Menu } from "components/chat/Menu/Menu";

const setup = () => {
    return shallow(<Menu />)
};

describe('MenuComponent', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).not.toBe(null)
    });
});
