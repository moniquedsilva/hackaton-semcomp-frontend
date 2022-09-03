import { Meta, Story } from '@storybook/react';

import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

export const Default: Story = (args) => <Link {...args} />;
