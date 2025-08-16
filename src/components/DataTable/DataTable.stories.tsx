import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable"; // your component

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    // default props for your component
  },
};
