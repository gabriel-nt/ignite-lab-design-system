import { rest } from 'msw';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';

import { SignIn } from "./SignIn";

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado'
          }));
        })
      ]
    }
  }
} as ComponentMeta<typeof SignIn>

export const Default: ComponentStoryObj<typeof SignIn> = {
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'gabriel@gmail.com');
    userEvent.type(canvas.getByPlaceholderText('**********'), '123456789');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => expect(canvas.getByText('Login realizado!')).toBeInTheDocument())
  }
}