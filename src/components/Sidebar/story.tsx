import { Meta, Story } from '@storybook/react';

import { Sidebar } from '.';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

export const Default: Story = (args) => <Sidebar {...args} />;
