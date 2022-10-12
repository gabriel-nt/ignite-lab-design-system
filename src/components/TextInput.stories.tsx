import { TextInput } from "./TextInput";
import { Envelope } from 'phosphor-react';

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input
        placeholder='Type your email address'
      />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as ComponentMeta<typeof TextInput.Root>

export const Default: ComponentStoryObj<typeof TextInput.Root> = {}

export const WithoutIcon: ComponentStoryObj<typeof TextInput.Root> = {
  args: {
    children: <TextInput.Input placeholder='Type your password' />
  }
}

