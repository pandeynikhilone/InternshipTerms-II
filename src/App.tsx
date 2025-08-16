import { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: { key: keyof User; header: string }[] = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
];


const initialData: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
];

export default function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState<User[]>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return alert("Name and Email required!");

    const newUser: User = {
      id: users.length + 1,
      name: fullName,
      email,
      role: "User",
    };
    setUsers([...users, newUser]);

    // reset form
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex gap-10 mx-auto w-full">
      {/* --- InputField Form Demo --- */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-[50%] flex flex-col gap-4 bg-white p-6 rounded-lg shadow"
      >
        <InputField
          label="Full Name"
          placeholder="Enter your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Confirm Password"
          placeholder="Re-enter your password"
          variant="ghost"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
      </form>

      {/* --- DataTable Demo --- */}
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow w-[50%]">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <DataTable<User>
          data={users}
          columns={columns}
          selectable
          onRowSelect={(rows) => console.log("Selected:", rows)}
        />
      </div>
    </div>
  );
}
