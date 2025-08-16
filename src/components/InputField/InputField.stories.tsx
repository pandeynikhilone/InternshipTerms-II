import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A reusable InputField component with support for labels, helper text, error messages, states, variants, sizes, optional clear button, password toggle, and theming.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

/* --- Basic States --- */
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We will not share your email.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    errorMessage: "Password is too short",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Phone",
    placeholder: "Enter phone number",
    disabled: true,
  },
};

/* --- Variants & Sizes --- */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <InputField {...args} variant="filled" label="Filled" />
      <InputField {...args} variant="outlined" label="Outlined" />
      <InputField {...args} variant="ghost" label="Ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <InputField {...args} size="sm" label="Small" placeholder="sm input" />
      <InputField {...args} size="md" label="Medium" placeholder="md input" />
      <InputField {...args} size="lg" label="Large" placeholder="lg input" />
    </div>
  ),
};

/* --- Optional Features --- */
export const WithClearButton: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    value: "Sample text",
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
  },
};

/* --- Theming --- */
export const DarkMode: Story = {
  render: (args) => (
    <div className="dark bg-gray-900 p-4">
      <InputField {...args} label="Dark Mode Field" placeholder="Type here" />
    </div>
  ),
};
