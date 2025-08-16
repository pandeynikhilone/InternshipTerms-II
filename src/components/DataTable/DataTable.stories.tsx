import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";
import type { Column } from "./DataTable.types";

// Example data type
interface User {
  id: number;
  name: string;
  email: string;
}

// Example mock data
const sampleData: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
];

// Example columns
const columns: Column<User>[] = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};
