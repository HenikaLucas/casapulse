import React from 'react';

import StickyHeader from './StickyHeader';


export default {
  title: 'Example/StickyHeader',
  component: StickyHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return <StickyHeader {...args}/>
};

export const Header = Template.bind({});
Header.args = {};
