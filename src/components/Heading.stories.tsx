import { Heading } from "./Heading";

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as ComponentMeta<typeof Heading>

export const Default: ComponentStoryObj<typeof Heading> = {}

export const Small: ComponentStoryObj<typeof Heading> = {
  args: {
    size: 'sm',
  }
}

export const Large: ComponentStoryObj<typeof Heading> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: ComponentStoryObj<typeof Heading> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1</h1>
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