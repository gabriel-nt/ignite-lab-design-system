import { Text } from "./Text";

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      }
    }
  }
} as ComponentMeta<typeof Text>

export const Default: ComponentStoryObj<typeof Text> = {}

export const Small: ComponentStoryObj<typeof Text> = {
  args: {
    size: 'sm',
  }
}

export const Large: ComponentStoryObj<typeof Text> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: ComponentStoryObj<typeof Text> = {
  args: {
    asChild: true,
    children: (
      <p>Text with p tag</p>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
  }
}