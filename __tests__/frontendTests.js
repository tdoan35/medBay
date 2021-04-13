import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import jest from 'jest-mock';

import NavBar from '../client/components/common/NavBar';

configure({ adapter: new Adapter() });


describe('React unit tests', () => {
  describe('NavBar', () => {
    let wrapper;
    const props = {
      items: ['FAK', 'MS', 'PPE']
    };

    beforeAll(() => {
      wrapper = shallow(<NavBar />);
    });

    it('Renders the title text', () => {
      expect(wrapper.text()).toEqual('medBay');
    });

    // it('Renders the correct number of Button components', () => {
    //   expect(wrapper.find('button').getElements().length).toEqual(2);
    // })

    // it('It should display 3 iconButtons in the NavBar', () => {
    //   // Expect 4 LabeledText components
    //   expect((wrapper.find({ label: "Market ID" })).prop('text')).toEqual(1);
    //   expect((wrapper.find({ label: "Location" })).prop('text')).toEqual('LA');
    //   expect((wrapper.find({ label: "Cards" })).prop('text')).toEqual(3);
    //   expect((wrapper.find({ label: "% of total" })).prop('text')).toEqual(10);
    // });

  });
};