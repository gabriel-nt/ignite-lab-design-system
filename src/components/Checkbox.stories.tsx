import { Checkbox } from "./Checkbox";

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Text } from "./Text";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {<Story />}
        <Text size="sm">Lembrar-me de mim por 30 dias</Text>
      </div>
    )
  ]
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStoryObj<typeof Checkbox> = {}
