import { Meta, Story } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const Default: Story = (args) => <Card {...args} />;
