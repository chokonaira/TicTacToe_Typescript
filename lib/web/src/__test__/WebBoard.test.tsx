import React from 'react';
import { shallow, mount } from 'enzyme';
import WebBoard from '../components/WebBoard';
import Board from '../lib/Board';

const board = new Board();

describe('<Board/>', () => {
  it('renders the Board grid rows', () => {
    const wrapper = shallow(<WebBoard board={board} />);
    expect(wrapper.find('.row').getElements().length).toEqual(3);
  });

  it('renders the Board cells with no contents in cell', () => {
    const wrapper = shallow(<WebBoard board={board} />);

    expect(
      wrapper.find('.row').forEach((row: any) => {
        row.children().forEach((cell: any) => {
          expect(cell.text()).toEqual('');
        });
      })
    );
  });

  it('renders the Board cells with currentMark in cell 1', () => {
    const wrapper = shallow(<WebBoard board={board} />);

    const button = wrapper.find('button');
    button.simulate('click');

    // console.log(wrapper.find('.row').children());
    expect(
      wrapper.find('.row').forEach((row:any) => {
        row.children().forEach((cell:any) => {
          // console.log(cell.text());
          expect(cell[1].text()).toEqual('X');
        });
      })
    );
  });
});
