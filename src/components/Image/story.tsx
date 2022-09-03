import { Meta, Story } from '@storybook/react';

import { Image } from '.';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

export const Default: Story = (args) => <Image {...args} />;
