import { Meta, Story } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

export const Default: Story = (args) => <Input {...args} />;
