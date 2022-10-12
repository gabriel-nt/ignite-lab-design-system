import { Button } from "./Button";

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {}
