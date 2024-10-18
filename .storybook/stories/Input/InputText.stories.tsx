import React from 'react';
import { action } from '@storybook/addon-actions';
import InputText from './InputText'; // Make sure the path to your InputText component is correct

export default {
  title: 'Components/InputText',
  component: InputText,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    hideLinkButton: { control: 'boolean' },
    link: { control: 'object' },
  },
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  error: false,
  disabled: false,
  helperText: 'Default',
  hideLinkButton: false,
  link: {
    text: 'Link Here',
    iconRight: false,
    iconLeft: false,
    type: 'default',
    size: 'medium',
  },
  onChange: action('Input changed'),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  value: 'Active value', // Simulate an active state
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: 'Filled value', // Simulate filled input
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true, // Enable error state
  helperText: 'Error message',
  value: '', // Empty input to trigger error
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true, // Disable the input field
  value: 'Disabled field',
};

export const WithLinkButton = Template.bind({});
WithLinkButton.args = {
  ...Default.args,
  hideLinkButton: true, // Show the link button
  link: {
    text: 'Go to Link',
    iconRight: true,
    iconLeft: false,
    type: 'default',
    size: 'medium',
  },
};

export const FetchedLinkInActive = Template.bind({});
FetchedLinkInActive.args = {
  ...Default.args,
  disabled: true,
  hideLinkButton: true, // Show the link button
  link: {
    text: 'Fetched Link',
    iconRight: false,
    iconLeft: false,
    type: 'active', // Active link type
    size: 'large',
  },
};
