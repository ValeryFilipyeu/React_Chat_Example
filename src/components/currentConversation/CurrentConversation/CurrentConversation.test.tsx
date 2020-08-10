import {shallow} from 'enzyme';
import * as React from 'react';
import { CurrentConversation } from "features/currentConversation/CurrentConversation/CurrentConversation";

const setup = () => {
    return shallow(<CurrentConversation />)
};

describe('SettingsPage', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).not.toBe(null)
    });
});